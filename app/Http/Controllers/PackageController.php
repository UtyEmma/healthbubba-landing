<?php

namespace App\Http\Controllers;

use App\Services\ApiService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PackageController extends Controller {


    function index(){
        return Inertia::render('Packages/Packages');
    }

    function show($package) {
        [$status, $message, $categories] = (new ApiService)->testCategories();
        [$status, $message, $test] = (new ApiService)->tests($package);
        // packageItem
        return Inertia::render('Packages/PackageDetails',[
            'categories' => $categories,
            'test' => $test
        ]);
    }

}
