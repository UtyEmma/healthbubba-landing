<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PractitionersController extends Controller {
    
    function index(){
        $testimonials = config('content.testimonials');
        $features = config('content.features');

        return inertia('Practitioners/Index', compact('testimonials', 'features'));
    }

    function howItWorks(){
        return inertia('Practitioners/HowItWorks');
    }
    
    function support(){
        return inertia('Practitioners/PractitionerSupport');
    }

}
