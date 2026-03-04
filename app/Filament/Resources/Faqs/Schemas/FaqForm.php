<?php

namespace App\Filament\Resources\Faqs\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;

class FaqForm
{
    public static function configure(Form $schema): Form
    {
        return $schema
            ->schema([
                TextInput::make('question')
                    ->columnSpanFull()
                    ->required(),
                // Select::make('page')
                //     ->native(false)
                //     ->options(array_map(fn($page) => $page['name'], config('pages')))
                //     ->columnSpanFull(),
                Textarea::make('answer')
                    ->required()
                    ->columnSpanFull(),
                Toggle::make('is_active')
                    ->default(true)
                    ->required(),
            ]);
    }
}
