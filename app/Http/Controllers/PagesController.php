<?php

namespace App\Http\Controllers;

use App\Services\ApiService;
use Inertia\Inertia;

class PagesController extends Controller {


    function index(){
        [$status, $message, ['categories' => $categories]] = (new ApiService)->allTests();

        $faqs = config('content.faqs');

        $testimonials = config('content.testimonials');

        $categories = collect($categories)->take(3)->toArray();
        return Inertia::render('Welcome', compact(['categories', 'faqs', 'testimonials']));
    }

    function about(){
        $testimonials = config('content.testimonials');
        return Inertia::render('About', compact('testimonials'));
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
        [$status, $message, ['categories' => $categories]] = (new ApiService)->allTests();
        $tests = collect(collect($categories)->reduce(function($carry, $item) {
            foreach ($item['tests'] as $test) {
                $test['category_id'] = $item['category_id'];
                $carry[] = $test;
            }

            return $carry;
        }, []))->random(4);

        return Inertia::render('Checkout/Cart', compact('tests'));
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
