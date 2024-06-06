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
});

Route::get('/register', function(){
    return Inertia::render('Auth/Register');
});

Route::get('/download', function(){
    return Inertia::render('Download');
});

Route::prefix('packages')->group(function(){
    Route::get('/', function(){
        return Inertia::render('Packages/Packages');
    });

    Route::prefix('{package}')->group(function(){
        Route::get('', function(){
            return Inertia::render('Packages/PackageDetails');
        });
    });
});

Route::get('/privacy-policy', function(){
    return Inertia::render('Policy/PrivacyPolicy');
});

Route::get('/terms', function(){
    return Inertia::render('Policy/Terms');
});
