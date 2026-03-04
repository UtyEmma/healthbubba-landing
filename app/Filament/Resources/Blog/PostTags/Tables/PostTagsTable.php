<?php

namespace App\Filament\Resources\Blog\PostTags\Tables;

use Filament\Support\Enums\MaxWidth;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class PostTagsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('tag'),
                IconColumn::make('is_active')
                    ->boolean()
            ])
            ->filters([
                //
            ])
            ->actions([
                EditAction::make()
                    ->slideOver()
                    ->modalWidth(MaxWidth::Medium),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])->modifyQueryUsing(fn($query) => $query->latest());
    }
}
