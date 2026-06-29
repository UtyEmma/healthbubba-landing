<?php

namespace App\Filament\Pages\Settings;

use App\Settings\GeneralSettings;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Form;
use Filament\Pages\SettingsPage;

class ScriptsSettings extends SettingsPage
{
    protected static ?string $navigationIcon = 'heroicon-o-code-bracket-square';

    protected static ?string $title = 'Header & Footer Scripts';
    protected static ?string $navigationLabel = 'Header & Footer Scripts';
    protected static ?string $navigationGroup = 'Settings';

    protected static string $settings = GeneralSettings::class;

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Textarea::make('header_scripts')
                    ->label('Header Scripts')
                    ->helperText('Injected just before the closing </head> tag on every page. E.g. analytics, meta tags, or custom <script> tags.')
                    ->rows(10)
                    ->columnSpanFull()
                    ->extraInputAttributes(['style' => 'font-family: monospace;']),
                Textarea::make('footer_scripts')
                    ->label('Footer Scripts')
                    ->helperText('Injected just before the closing </body> tag on every page. E.g. chat widgets or tracking pixels.')
                    ->rows(10)
                    ->columnSpanFull()
                    ->extraInputAttributes(['style' => 'font-family: monospace;']),
            ]);
    }
}
