<?php

namespace App\Models\Blog;

use App\Concerns\HasFaqs;
use App\Concerns\HasScopes;
use App\Enums\PostStatus;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Post extends Model {
    use HasUuids, SoftDeletes, HasScopes, HasFaqs;

    protected $fillable = ['title', 'slug', 'category_id', 'image', 'author_id', 'content', 'excerpt', 'visits', 'unique_visits', 'meta_keywords', 'meta_description', 'published_at', 'is_featured', 'status', 'videos'];

    protected $casts = [
        'status' => PostStatus::class,
        'is_featured' => 'boolean',
        'published_at' => 'datetime',
        'videos' => 'array'
    ];

    protected $hidden = ['deleted_at'];

    protected $with = ['category', 'author'];

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


}
