<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class GeneralSettings extends Settings
{
    public ?string $header_scripts;

    public ?string $footer_scripts;

    public static function group(): string
    {
        return 'general';
    }
}