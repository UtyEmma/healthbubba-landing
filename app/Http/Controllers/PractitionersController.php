<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PractitionersController extends Controller {
    
    function howItWorks(){
        return inertia('Practitioners/HowItWorks');
    }
    
    function support(){
        return inertia('Practitioners/PractitionerSupport');
    }

}
