<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('seo_settings', function (Blueprint $table) {
            $table->id();
            $table->boolean('singleton')->default(true)->unique();
            $table->longText('robots_txt');
            $table->timestamps();
        });

        $baseUrl = rtrim((string) config('app.url'), '/');
        $robotsTxt = implode("\n", [
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

        DB::table('seo_settings')->insert([
            'singleton' => true,
            'robots_txt' => $robotsTxt,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seo_settings');
    }
};
