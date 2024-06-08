<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/register', function(){
    return Inertia::render('Auth/Register');
})->name('register');

Route::get('/download', function(){
    return Inertia::render('Download');
})->name('download');

Route::prefix('packages')->group(function(){
    Route::get('/', function(){
        return Inertia::render('Packages/Packages');
    })->name('packages');

    Route::prefix('{package}')->group(function(){
        Route::get('', function(){
            return Inertia::render('Packages/PackageDetails');
        })->name('packages.detail');
    });
});

Route::get('/privacy-policy', function(){
    return Inertia::render('Policy/PrivacyPolicy');
})->name('privacy-policy');

Route::get('/terms', function(){
    return Inertia::render('Policy/Terms');
})->name('terms');

Route::get('shop', function(){
    return Inertia::render('Shop/Shop');
})->name('shop');

Route::get('cart', function(){
    return Inertia::render('Checkout/Cart');
})->name('cart');

Route::get('checkout', function(){
    return Inertia::render('Checkout/Checkout');
})->name('checkout');
