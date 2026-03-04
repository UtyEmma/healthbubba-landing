<?php

namespace App\Filament\Resources\Blog\PostTags;

use App\Enums\NavigationGroups;
use App\Filament\Resources\Blog\PostTags\Pages\ListPostTags;
use App\Filament\Resources\Blog\PostTags\Schemas\PostTagForm;
use App\Filament\Resources\Blog\PostTags\Tables\PostTagsTable;
use App\Models\Blog\PostTag;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Table;

class PostTagResource extends Resource
{
    protected static ?string $model = PostTag::class;

    protected static string|null $navigationIcon = 'heroicon-o-bookmark-square';
    protected static string|null $navigationGroup = NavigationGroups::BLOG; 

    protected static ?string $recordTitleAttribute = 'tag';

    public static function form(Form $schema): Form
    {
        return PostTagForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PostTagsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListPostTags::route('/'),
        ];
    }
}
