<?php

namespace App\Concerns;

use Illuminate\Database\Eloquent\Builder;

trait HasScopes {

    function scopeWhereLikeWords(Builder $query, string|array $column, string|int $keyword){
        $words = explode(' ', $keyword);
        foreach ($words as $word) {
            if(is_array($column)) {
                foreach($column as $item) {
                    $query->orWhereLike($item, "%$word%");
                }

                continue;
            }

            $query->orWhereLike($column, "%$word%");
        }
    }

}