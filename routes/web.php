<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyOtpController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\PagesController;
use App\Http\Middleware\Authenticate;
use Illuminate\Support\Facades\Route;

Route::get('/', [PagesController::class, 'index'])->name('home');
Route::get('/practitioners', [PagesController::class, 'practitioners'])->name('practitioners');
Route::get('/about', [PagesController::class, 'about'])->name('about');

Route::prefix('register')->group(function(){
    Route::get('', [RegisteredUserController::class, 'create'])->name('register');
    Route::post('', [RegisteredUserController::class, 'store'])->name('register.store');
});

Route::prefix('verify-otp')->group(function(){
    Route::get('', [VerifyOtpController::class, 'index'])->name('verify-otp');
    Route::post('', [VerifyOtpController::class, 'store'])->name('verify-otp.store');
});

Route::prefix('login')->group(function(){
    Route::get('', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('', [AuthenticatedSessionController::class, 'store'])->name('login.store');
});

Route::middleware(Authenticate::class)->group(function(){
    Route::prefix('checkout')->group(function(){
        Route::get('', [PagesController::class, 'checkout'])->name('checkout');
        Route::post('purchase', [OrderController::class, 'store'])->name('checkout.purchase');
    });
});

Route::get('logout', LogoutController::class)->name('logout');

Route::get('/download', [PagesController::class, 'download'])->name('download');

Route::prefix('packages')->group(function(){
    Route::get('/', [PackageController::class, 'index'])->name('packages');

    Route::prefix('{package?}')->group(function(){
        Route::get('', [PackageController::class, 'show'])->name('packages.detail');
    });
});

Route::get('/privacy-policy', [PagesController::class, 'policy'])->name('privacy-policy');

Route::get('/terms', [PagesController::class, 'terms'])->name('terms');
Route::get('/cancellation-policy', [PagesController::class, 'cancellationPolicy'])->name('cancellation-policy');

Route::prefix('medications')->group(function(){
    Route::get('', [PagesController::class, 'medications'])->name('shop');
});

Route::get('cart', [PagesController::class, 'cart'])->name('cart');

include_once __DIR__.'/api.php';
