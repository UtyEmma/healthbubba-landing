<?php

namespace App\Console\Commands;

use App\Models\Blog\Post;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Route;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command {

    protected $signature = 'sitemap:generate';
    protected $description = 'Generate the sitemap.';

    public function handle(): void {
        $routes = config('sitemap.include_routes');

        $sitemap = Sitemap::create();

        foreach ($routes as $routeName) {
            if (Route::has($routeName)) {
                $sitemap->add(Url::create(route($routeName)));
            }
        }

        Post::published()
            ->latest('published_at')
            ->get()
            ->each(fn (Post $post) => $sitemap->add($post->toSitemapTag()));

        $sitemap->writeToFile(public_path('sitemap.xml'));
    }
}
