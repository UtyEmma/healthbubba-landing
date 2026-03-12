<?php

namespace App\Models\Blog;

use App\Services\ImageOptimizationService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostReviewer extends Model {
    use HasFactory;

    protected $fillable = ['name', 'image', 'specialty', 'description'];

    protected static function booted(): void
    {
        static::saving(function (self $reviewer): void {
            if ($reviewer->isDirty('image') && $reviewer->image) {
                $reviewer->image = app(ImageOptimizationService::class)->optimizePublicImage($reviewer->image);
            }
        });
    }

    function posts(){
        return $this->hasMany(Post::class, 'reviewer_id');
    }

    function getAvatarAttribute(){
        if(!$this->image) return '';
        return asset("storage/{$this->image}");
    }
}
