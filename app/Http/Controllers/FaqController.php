<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FaqController extends Controller {
    
    function index(){
        $faqs = config('faqs.patients');
        return Inertia::render('Faqs', compact('faqs'));
    }

}
