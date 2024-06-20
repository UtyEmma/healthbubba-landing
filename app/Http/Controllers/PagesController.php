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
        [$status, $message, $categories] = (new ApiService)->medicationCategories();
        [$status, $message, ['medications' => $products]] = (new ApiService)->medications($categories[0]['category_id']);
        return Inertia::render('Shop/Shop', compact('categories', 'products'));
    }

    function medication($category){
        [$status, $message, ['medications' => $products]] = (new ApiService)->medications($category);
        return back()->with(compact('products'));
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
