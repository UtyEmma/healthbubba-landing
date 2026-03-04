<?php

namespace App\Filament\Resources\Blog\PostCategories;

use App\Enums\NavigationGroups;
use App\Filament\Clusters\PostMeta\PostMetaCluster;
use App\Filament\Resources\Blog\PostCategories\Pages\CreatePostCategory;
use App\Filament\Resources\Blog\PostCategories\Pages\EditPostCategory;
use App\Filament\Resources\Blog\PostCategories\Pages\ListPostCategories;
use App\Filament\Resources\Blog\PostCategories\Schemas\PostCategoryForm;
use App\Filament\Resources\Blog\PostCategories\Tables\PostCategoriesTable;
use App\Models\Blog\PostCategory;
use BackedEnum;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use UnitEnum;

class PostCategoryResource extends Resource
{
    protected static ?string $model = PostCategory::class;

    protected static string|null $navigationIcon = 'heroicon-o-bookmark-square';
    protected static ?string $recordTitleAttribute = 'name';
    protected static string|null $navigationGroup = NavigationGroups::BLOG; 

    public static function form(Form $schema): Form
    {
        return PostCategoryForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PostCategoriesTable::configure($table);
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
            'index' => ListPostCategories::route('/'),
            'create' => CreatePostCategory::route('/create'),
            'edit' => EditPostCategory::route('/{record}/edit'),
        ];
    }

    public static function getRecordRouteBindingEloquentQuery(): Builder
    {
        return parent::getRecordRouteBindingEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
