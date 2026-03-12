<?php

namespace App\Models\Blog;

use App\Concerns\HasFaqs;
use App\Concerns\HasScopes;
use App\Enums\PostStatus;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use App\Services\ImageOptimizationService;
use Spatie\Sitemap\Contracts\Sitemapable;
use Spatie\Sitemap\Tags\Url;

class Post extends Model implements Sitemapable {
    use HasUuids, SoftDeletes, HasScopes, HasFaqs;

    protected $fillable = ['title', 'slug', 'category_id', 'image', 'image_alt', 'author_id', 'content', 'excerpt', 'visits', 'unique_visits', 'meta_keywords', 'meta_description', 'published_at', 'is_featured', 'faq_title', 'reviewer_id', 'status', 'videos'];

    protected $casts = [
        'status' => PostStatus::class,
        'is_featured' => 'boolean',
        'published_at' => 'datetime',
        'videos' => 'array'
    ];

    protected $hidden = ['deleted_at'];

    protected $with = ['category', 'author'];

    protected static function booted(): void
    {
        static::saving(function (self $post): void {
            if ($post->isDirty('image') && $post->image) {
                $post->image = app(ImageOptimizationService::class)->optimizePublicImage($post->image);
            }
        });

        static::saved(function (self $post): void {
            Artisan::call('sitemap:generate');
        });

        static::deleted(function (): void {
            Artisan::call('sitemap:generate');
        });

        static::restored(function (): void {
            Artisan::call('sitemap:generate');
        });
    }

    function scopePublished(Builder $query){
        $query->whereDate('published_at', '<=', now())
            ->where('status', PostStatus::PUBLISHED);
    }

    function scopeFilter(Builder $query, $params) {
        $filters = collect($params);

        $query->when(
            $filters->get('category'), 
            function($query, $category) {
                 $query->whereRelation('category', 'id', $category)
                    ->orWhereRelation('category', 'slug', $category);
        });

        $query->when(
            $filters->get('keyword'), 
            function($query, $keyword) {
                $query->whereLikeWords('title', $keyword)
                    ->whereRelation('category', 'name', "LIKE", "%$keyword%");
            }
        );
    }

    function tags(){
        return $this->belongsToMany(PostTag::class, 'blog_post_tags');
    }

    function category(){
        return $this->belongsTo(PostCategory::class, 'category_id');
    }

    function reviewer(){
        return $this->belongsTo(PostReviewer::class, 'reviewer_id');
    }

    function author(){
        return $this->belongsTo(User::class, 'author_id');
    }

    function getFeaturedImageAttribute(){
        if(!$this->image) return '';
        return asset("storage/{$this->image}");
    }

    function getPostVideosAttribute(){
        if(!$this->videos) return [];
        return array_map(fn($video) => route('file',  asset("storage/{$video}")), $this->videos);
    }

    function isPublished(){
        return now()->gte($this->published_at) || $this->status != PostStatus::PUBLISHED; 
    }

    function toSitemapTag(): Url|string|array
    {
        return Url::create(route('blog.show', $this))
                ->setLastModificationDate(Carbon::create($this->updated_at));
    }


}
