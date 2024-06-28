<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\PagesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [PagesController::class, 'index'])->name('home');
Route::get('/about', [PagesController::class, 'about'])->name('about');

Route::get('/register', [RegisteredUserController::class, 'create'])->name('register');

Route::get('/download', [PagesController::class, 'download'])->name('download');

Route::prefix('packages')->group(function(){
    Route::get('/', [PackageController::class, 'index'])->name('packages');

    Route::prefix('{package}')->group(function(){
        Route::get('', [PackageController::class, 'show'])->name('packages.detail');
    });
});

Route::get('/privacy-policy', [PagesController::class, 'policy'])->name('privacy-policy');

Route::get('/terms', [PagesController::class, 'terms'])->name('terms');

Route::prefix('medications')->group(function(){
    Route::get('', [PagesController::class, 'medications'])->name('shop');
    // Route::get('{category}', [PagesController::class, 'medication'])->name('shop.details');
});

Route::get('cart', [PagesController::class, 'cart'])->name('cart');

Route::get('checkout', [PagesController::class, 'checkout'])->name('checkout');

include_once __DIR__.'/api.php';
