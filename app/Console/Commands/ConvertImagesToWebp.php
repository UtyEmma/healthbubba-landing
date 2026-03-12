<?php

namespace App\Console\Commands;

use App\Models\Blog\Post;
use App\Models\Blog\PostCategory;
use App\Models\Blog\PostReviewer;
use App\Services\ImageOptimizationService;
use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\Model;

class ConvertImagesToWebp extends Command
{
    protected $signature = 'images:convert-to-webp {--force : Re-process files that already end in .webp}';
    protected $description = 'Convert uploaded images referenced in the database to WebP and update stored paths.';

    public function handle(): int
    {
        $force = (bool) $this->option('force');
        $optimizer = app(ImageOptimizationService::class);

        $targets = [
            [Post::class, 'image'],
            [PostReviewer::class, 'image'],
            [PostCategory::class, 'thumbnail'],
        ];

        $scanned = 0;
        $updated = 0;

        foreach ($targets as [$modelClass, $column]) {
            /** @var \Illuminate\Database\Eloquent\Collection<int, Model> $records */
            $records = $modelClass::query()
                ->whereNotNull($column)
                ->get([$modelClass::query()->getModel()->getKeyName(), $column]);

            foreach ($records as $record) {
                $currentPath = (string) $record->getAttribute($column);

                if ($currentPath === '') {
                    continue;
                }

                $scanned++;

                if (! $force && str_ends_with(strtolower($currentPath), '.webp')) {
                    continue;
                }

                $newPath = $optimizer->optimizePublicImage($currentPath);

                if ($newPath !== $currentPath && $newPath !== '') {
                    $record->forceFill([$column => $newPath])->saveQuietly();
                    $updated++;
                }
            }
        }

        $this->info("Scanned {$scanned} image references, updated {$updated} to WebP paths.");

        return self::SUCCESS;
    }
}

