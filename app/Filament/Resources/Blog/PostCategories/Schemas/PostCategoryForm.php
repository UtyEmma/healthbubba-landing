<?php

namespace App\Filament\Resources\Blog\PostCategories\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;

class PostCategoryForm
{
    public static function configure(Form $schema): Form
    {
        return $schema
            ->columns(3)
            ->schema([
                Grid::make(1)
                    ->columnSpan(2)
                    ->schema([
                        Section::make('Category Details')
                            ->schema([
                                TextInput::make('name')
                                    ->unique(ignoreRecord: true)
                                    ->required(),
                                Textarea::make('description')
                                    ->default(null)
                                    ->columnSpanFull(),
                                // FileUpload::make('thumbnail'),
                            ]),
                        // Section::make('SEO Information')
                        //     ->schema([
                        //         TextInput::make('meta_keywords')
                        //             ->default(null)
                        //             ->columnSpanFull(),
                        //         Textarea::make('meta_description')
                        //             ->default(null)
                        //             ->columnSpanFull(),
                        //     ])
                    ]),
                Grid::make(1)
                    ->columnSpan(1)
                    ->schema([
                        Section::make('Settings')
                            ->schema([
                                Select::make('category')
                                    ->relationship('category', 'name')
                                    ->preload()
                                    ->native()
                                    ->searchable(),
                                Toggle::make('is_featured')
                                    ->required(),
                                Toggle::make('is_active')
                                    ->default(true)
                                    ->required(),
                            ])
                    ])
                
            ]);
    }
}
