<?php

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;

Route::prefix('test')->group(function(){
    Route::get('categories', [ApiController::class, 'testCategories'])->name('tests.categories');
    Route::get('packages', [ApiController::class, 'packages'])->name('tests.packages');
    Route::get('{category}', [ApiController::class, 'tests'])->name('tests.list');
});

Route::prefix('medications')->group(function(){
    Route::get('categories', [ApiController::class, 'medicationCategories'])->name('medications.categories');
    Route::get('{category}', [ApiController::class, 'medications'])->name('medications.list');
});
