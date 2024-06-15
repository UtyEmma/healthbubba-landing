<?php

namespace App\Http\Controllers;

use App\Services\ApiService;
use Inertia\Inertia;

class PagesController extends Controller {


    function index(){
        // [$status, $message, $categories] = (new ApiService)->testCategories();
        [$status, $message, ['categories' => $categories]] = (new ApiService)->allTests();

        $faqs = config('content.faqs');

        return Inertia::render('Welcome', [
            'categories' => $categories,
            'faqs' => $faqs
        ]);
    }

    function download(){
        return Inertia::render('Download');
    }

    function medications(){
        return Inertia::render('Shop/Shop');
    }

    function cart(){
        return Inertia::render('Checkout/Cart');
    }

    function checkout(){
        return Inertia::render('Checkout/Checkout');
    }

    function terms(){
        return Inertia::render('Policy/Terms');
    }

    function policy(){
        return Inertia::render('Policy/PrivacyPolicy');
    }

}
