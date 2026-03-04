<?php

namespace App\Models\Blog;

use Illuminate\Database\Eloquent\Model;

class PostTag extends Model
{
    protected $fillable = ['tag', 'is_active'];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    protected $attributes = [
        'is_active' => true
    ];
}
