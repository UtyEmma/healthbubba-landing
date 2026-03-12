<?php

namespace App\Models\Blog;

use App\Services\ImageOptimizationService;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class PostCategory extends Model {
    use HasUuids, SoftDeletes;

    protected $fillable = ['category_id', 'name', 'description', 'thumbnail', 'meta_keywords', 'meta_description', 'is_featured', 'is_active'];

    protected $casts = [
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    protected $attributes = [
        'is_active' => true
    ];

    protected static function booted(): void
    {
        static::saving(function (self $category): void {
            if ($category->isDirty('thumbnail') && $category->thumbnail) {
                $category->thumbnail = app(ImageOptimizationService::class)->optimizePublicImage($category->thumbnail);
            }
        });
    }

    function posts(){
        return $this->hasMany(Post::class, 'category_id');
    }

    function category(){
        return $this->belongsTo(PostCategory::class, 'category_id');
    }

    function getSlugAttribute(){
        return str($this->name)->slug();
    }

}
