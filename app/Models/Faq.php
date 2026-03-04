<?php

namespace App\Models;

use App\Concerns\HasActive;
use Illuminate\Database\Eloquent\Model;

class Faq extends Model {
    use HasActive;
    
    protected $fillable = ['question', 'answer', 'page', 'is_active'];

    protected $attributes = [
        'is_active' => true
    ];

    function owner(){
        return $this->morphTo();
    }
}
