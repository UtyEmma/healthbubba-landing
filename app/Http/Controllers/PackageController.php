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
        [$status, $message, ['test' => $test, 'testPackages' => $packages]] = (new ApiService)->packages($package);
        $faqs = config('content.faqs');
        // dd($test, $packages);
        // packageItem
        return Inertia::render('Packages/PackageDetails',[
            'categories' => $categories,
            'test' => $test,
            'packages' => $packages,
            'faqs' => $faqs
        ]);
    }

}
