<?php

namespace App\Filament\Resources\Faqs\Pages;

use App\Filament\Resources\Faqs\FaqResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Support\Enums\MaxWidth;
use Illuminate\Contracts\Support\Htmlable;

class ListFaqs extends ListRecords
{
    protected static string $resource = FaqResource::class;

    function getTitle(): string|Htmlable {
        return "Frequently Asked Questions";
    }

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make()
                ->label('Add Question')
                ->slideOver()
                ->modalWidth(MaxWidth::Medium),
        ];
    }
}
