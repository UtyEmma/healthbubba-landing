<?php

namespace App\Filament\Resources\Blog\Posts\Schemas;

use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class PostInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('id')
                    ->label('ID'),
                TextEntry::make('title'),
                TextEntry::make('slug'),
                TextEntry::make('category_id'),
                TextEntry::make('author_id'),
                TextEntry::make('thumbnail'),
                TextEntry::make('visits')
                    ->numeric(),
                TextEntry::make('unique_visits')
                    ->numeric(),
                TextEntry::make('published_at'),
                IconEntry::make('is_featured')
                    ->boolean(),
                TextEntry::make('status'),
                TextEntry::make('deleted_at')
                    ->dateTime(),
                TextEntry::make('created_at')
                    ->dateTime(),
                TextEntry::make('updated_at')
                    ->dateTime(),
            ]);
    }
}
