<?php

namespace App\Concerns;

trait HasActive {

    function scopeIsActive($query){
        $query->whereIsActive(true);
    }

    function scopeIsNotActive($query){
        $query->whereIsActive(false);
    }

    function toggleStatus(){
        $this->update([
            'is_active' => !$this->is_active
        ]);
    }

    function activate(){
        $this->update([
            'is_active' => true
        ]);
    }

    function deactivate(){
        $this->update([
            'is_active' => false
        ]);
    }

}