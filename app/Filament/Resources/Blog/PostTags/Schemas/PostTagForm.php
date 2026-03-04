<?php

namespace App\Filament\Resources\Blog\PostTags\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;

class PostTagForm
{
    public static function configure(Form $schema): Form
    {
        return $schema
            ->columns(1)
            ->components([
                TextInput::make('tag')
                    ->unique(ignoreRecord: true),
                Toggle::make('is_active')
                    ->default(true)
            ]);
    }
}
