<?php

namespace App\Filament\Resources\Blog\Posts;

use App\Enums\NavigationGroups;
use App\Filament\Resources\Blog\Posts\Pages\CreatePost;
use App\Filament\Resources\Blog\Posts\Pages\EditPost;
use App\Filament\Resources\Blog\Posts\Pages\ListPosts;
use App\Filament\Resources\Blog\Posts\Pages\ViewPost;
use App\Filament\Resources\Blog\Posts\Schemas\PostForm;
use App\Filament\Resources\Blog\Posts\Schemas\PostInfolist;
use App\Filament\Resources\Blog\Posts\Tables\PostsTable;
use App\Models\Blog\Post;
use BackedEnum;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use UnitEnum;

class PostResource extends Resource
{
    protected static ?string $model = Post::class;

    protected static string|null $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $recordTitleAttribute = 'title';
    protected static string|null $navigationGroup = NavigationGroups::BLOG; 

    public static function form(Form $schema): Form
    {
        return PostForm::configure($schema);
    }

    // public static function infolist(Schema $schema): Schema
    // {
    //     return PostInfolist::configure($schema);
    // }

    public static function table(Table $table): Table
    {
        return PostsTable::configure($table);
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
            'index' => ListPosts::route('/'),
            'create' => CreatePost::route('/create'),
            // 'view' => ViewPost::route('/{record}'),
            'edit' => EditPost::route('/{record}/edit'),
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
