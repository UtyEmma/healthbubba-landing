<?php

namespace App\Filament\Resources\Blog\Posts\Schemas;

use App\Enums\PostStatus;
use Filament\Forms\Components\Actions\Action;
use Illuminate\Support\Facades\Auth;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Support\Enums\MaxWidth;
use Illuminate\Database\Eloquent\Model;

class PostForm
{
    public static function configure(Form $schema): Form
    {
        return $schema
            ->columns(3)
            ->schema([
                Grid::make()
                    ->columns(1)
                    ->columnSpan(2)
                    ->schema([
                        Section::make('Post Content')
                            ->schema([
                                Grid::make(2)
                                    ->schema([
                                        FileUpload::make('image')
                                            ->label('Featured Image')
                                            ->visibility('public')
                                            // ->directory('storage')
                                            ->imageEditor()
                                            ->imagePreviewHeight('150')
                                    ]),
                                TextInput::make('title')
                                    ->live(true)
                                    ->afterStateUpdated(function (Get $get, Set $set, string $operation, ?string $state) {
                                        if ($operation === 'create') $set('slug', str($state)->slug());
                                    })
                                    ->required(),
                                RichEditor::make('content')
                                    ->required()
                                    ->columnSpanFull(),
                                FileUpload::make('videos')
                                    ->label('Videos')
                                    ->acceptedFileTypes(['video/mp4', 'video/ogg', 'video/webm'])
                                    ->multiple()
                                    ->visibility('public')
                                    // ->directory('storage')
                            ]),
                        Section::make('Meta Information')
                            ->schema([
                                Select::make('tags')
                                    ->label('Tags')
                                    ->multiple()
                                    ->preload()
                                    ->relationship('tags', 'tag')
                                    ->createOptionForm([
                                        TextInput::make('tag')
                                            ->unique()
                                            ->required(),
                                    ])
                                    ->createOptionAction(
                                        fn (Action $action) => $action->modalWidth(MaxWidth::Medium),
                                    ),
                                TextInput::make('slug')
                                    ->unique(table: 'posts', column: 'slug', ignoreRecord: true)
                                    ->required(),
                                Textarea::make('excerpt')
                                    ->default(null)
                                    ->columnSpanFull(),
                                
                            ]),
                        Section::make('Frequently Asked Questions')
                            ->schema([
                                TextInput::make('faq_title')
                                    ->columnSpanFull(),
                                Repeater::make('faqs')
                                    ->label('')
                                    ->addActionLabel('Add To Faqs')
                                    ->relationship('faqs')
                                    ->schema([
                                        TextInput::make('question')
                                            ->required(),
                                        Textarea::make('answer')
                                            ->default(null)
                                            ->columnSpanFull(),
                                        Toggle::make('is_active')
                                            ->default(true)
                                    ])
                                
                            ]),
                        Section::make('SEO Information')
                            ->schema([
                                TextInput::make('meta_keywords')
                                    ->columnSpanFull(),
                                Textarea::make('meta_description')
                                    ->columnSpanFull(),
                            ])
                    ]),
                Grid::make()
                    ->columns(1)
                    ->columnSpan(1)
                    ->schema([
                        Section::make('Post Info')
                            ->schema([
                                Select::make('category_id')
                                    ->label('Category')
                                    ->relationship(
                                        name: 'category',
                                        titleAttribute: 'name',
                                        // ignoreRecord: true
                                    )
                                    ->nullable()
                                    ->searchable(['name'])
                                    ->preload()
                                    ->createOptionForm([
                                        FileUpload::make('thumbnail'),
                                        TextInput::make('name')
                                            ->unique(ignoreRecord: true)
                                            ->required(),
                                        Textarea::make('description')
                                            ->default(null)
                                            ->columnSpanFull(),
                                    ])
                                    ->createOptionAction(
                                        fn (Action $action) => $action->modalWidth(MaxWidth::Large),
                                    )
                                    ->native(false)
                                    ->default(null),
                                Select::make('author')
                                    ->required()
                                    ->relationship('author', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->native(false)
                                    ->label('Author')
                                    ->default(Auth::id()),
                                Select::make('reviewer_id')
                                    ->required()
                                    ->relationship('reviewer', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->native(false)
                                    ->label('Reviewer'),
                                DateTimePicker::make('published_at')
                                    ->default(now()),
                                Select::make('status')
                                    ->options(PostStatus::class)
                                    ->native(false)
                                    ->required(),
                                Toggle::make('is_featured'),
                            ])
                    ])
            ]);
    }
}
