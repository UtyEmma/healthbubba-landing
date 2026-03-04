<?php

namespace App\Models\Blog;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostReviewer extends Model {
    use HasFactory;

    protected $fillable = ['name', 'image', 'specialty', 'description'];

    function posts(){
        return $this->hasMany(Post::class, 'reviewer_id');
    }

    function getAvatarAttribute(){
        if(!$this->image) return '';
        return asset("storage/{$this->image}");
    }
}
