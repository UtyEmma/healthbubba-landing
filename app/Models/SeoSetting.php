<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SeoSetting extends Model
{
    protected $fillable = ['singleton', 'robots_txt'];

    protected $casts = [
        'singleton' => 'boolean',
    ];

    protected static function booted(): void
    {
        static::saved(function (self $setting): void {
            $setting->syncRobotsTxtFile();
        });
    }

    public function syncRobotsTxtFile(): void
    {
        file_put_contents(public_path('robots.txt'), $this->robots_txt ?: static::defaultRobotsTxt());
    }

    public static function defaultRobotsTxt(): string
    {
        $baseUrl = rtrim((string) config('app.url'), '/');

        return implode("\n", [
            'User-agent: *',
            'Disallow: /admin',
            'Disallow: /login',
            'Disallow: /register',
            'Disallow: /verify-otp',
            'Disallow: /checkout',
            'Disallow: /cart',
            'Disallow: /logout',
            "Sitemap: {$baseUrl}/sitemap.xml",
            '',
        ]);
    }
}

