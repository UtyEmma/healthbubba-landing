<?php

namespace App\Filament\Resources\Blog\PostReviewerResource\Pages;

use App\Filament\Resources\Blog\PostReviewerResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPostReviewers extends ListRecords
{
    protected static string $resource = PostReviewerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
