<?php

namespace App\Http\Controllers;

use App\Services\ApiService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PackageController extends Controller {


    function index(){
        [$status, $message, ['categories' => $categories]] = (new ApiService)->allTests();
        $tests = collect(collect($categories)->reduce(function($carry, $item) {
            foreach ($item['tests'] as $test) {
                $test['category_id'] = $item['category_id'];
                $carry[] = $test;
            }

            return $carry;
        }, []))->sortBy('test_id')->toArray();

        return Inertia::render('Packages/Packages', [
            'categories' => $categories,
            'tests' => array_values($tests)
        ]);
    }

    function show($package) {
        [$status, $message, ['categories' => $categories]] = (new ApiService)->allTests();
        [$status, $message, ['test' => $test, 'testPackages' => $packages]] = (new ApiService)->packages($package);
        $faqs = config('content.faqs');

        return Inertia::render('Packages/PackageDetails',[
            'categories' => $categories,
            'test' => $test,
            'packages' => $packages,
            'faqs' => $faqs
        ]);
    }

}
