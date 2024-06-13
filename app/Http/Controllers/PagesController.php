<?php

namespace App\Http\Controllers;

use App\Services\ApiService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller {


    function index(){
        [$status, $message, $categories] = (new ApiService)->testCategories();
        // [$status, $message, $categories] = (new ApiService)->allTests();
        // $categories = collect($categories)->sortBy('category_id')->all();

        return Inertia::render('Welcome', [
            'categories' => $categories
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
