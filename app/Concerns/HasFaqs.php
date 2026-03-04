<?php
namespace App\Concerns;

use App\Models\Faq;

trait HasFaqs {

    function faqs(){
        return $this->morphMany(Faq::class, 'owner');
    }

}