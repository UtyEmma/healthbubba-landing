<?php

namespace App\Filament\Pages\Settings;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Page;

class RobotSettings extends Page implements HasForms {
    use InteractsWithForms;

    protected static ?string $navigationIcon = 'heroicon-o-code-bracket';

    protected static ?string $title = 'Robots.txt';
    protected static ?string $navigationLabel = 'Robots.txt';
    protected static ?string $navigationGroup = 'Settings';
    protected static string $view = 'filament.pages.settings.robot-settings';

    public ?array $data = [];
    
    public function mount(): void {
        $this->form->fill([
            'content' => file_get_contents(public_path('robots.txt'))
        ]);
    }

    public function form(Form $form): Form {
        return $form
            ->schema([
                Textarea::make('content')
                    ->label('Edit robots.txt')
                    ->rows(20)
                    ->required(),
            ])->statePath('data');
    }

    public function save(): void
    {
        $data = $this->form->getState();
        $content = $data['content'];

        // Normalize line endings to LF
        $content = str_replace("\r\n", "\n", $content);

        // Validate each non-empty line contains a valid robots.txt directive
        $validDirectives = [
            'user-agent', 'disallow', 'allow', 'sitemap',
            'crawl-delay', 'host', 'clean-param',
        ];
        $lines = explode("\n", $content);

        foreach ($lines as $index => $line) {
            $trimmed = trim($line);

            // Allow empty lines and comments
            if ($trimmed === '' || str_starts_with($trimmed, '#')) {
                continue;
            }

            // Each directive line must have a colon separator
            if (! str_contains($trimmed, ':')) {
                Notification::make()
                    ->title('Validation Error')
                    ->body('Line ' . ($index + 1) . ': Invalid syntax — expected "Directive: value".')
                    ->danger()
                    ->send();

                return;
            }

            $directive = strtolower(trim(explode(':', $trimmed, 2)[0]));

            if (! in_array($directive, $validDirectives, true)) {
                Notification::make()
                    ->title('Validation Error')
                    ->body('Line ' . ($index + 1) . ': Unknown directive "' . e($directive) . '".')
                    ->danger()
                    ->send();

                return;
            }
        }

        // Strip any NULL bytes or control characters (except newline/tab)
        $content = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F]/', '', $content);

        $path = public_path('robots.txt');

        if (file_put_contents($path, $content) === false) {
            Notification::make()
                ->title('Error')
                ->body('Failed to write robots.txt. Check file permissions.')
                ->danger()
                ->send();

            return;
        }

        Notification::make()
            ->title('Success')
            ->body('Robots.txt file updated successfully.')
            ->success()
            ->send();
    }
}
