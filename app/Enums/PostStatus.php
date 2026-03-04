<?php

namespace App\Enums;

use Filament\Support\Contracts\HasColor;
use Filament\Support\Contracts\HasLabel;

enum PostStatus:string implements HasLabel, HasColor {

    case DRAFT = 'draft';
    case PUBLISHED = 'published';
    case UNPUBLISHED = 'unpublished';

    public function getLabel(): string|null {
        return match($this) {
            self::DRAFT => 'Draft',
            self::PUBLISHED => 'Published',
            self::UNPUBLISHED => 'Unpublished'
        };
    }

    public function getColor(): array|string|null {
        return match($this) {
            self::DRAFT => 'warning',
            self::PUBLISHED => 'success',
            self::UNPUBLISHED => 'danger'
        };
    }

}