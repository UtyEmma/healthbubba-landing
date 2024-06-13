<?php

namespace App\Http\Controllers;

use App\Services\ApiService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ApiController extends Controller {

    function testCategories(){
        [$status, $message, $data] = (new ApiService)->testCategories();
        if(!$status) return null;
        return $data;
    }

    function packages($category){
        [$status, $message, $data] = (new ApiService)->packages($category);
        if(!$status) return null;
        return $data;
    }

    function tests(Request $request, $category){
        [$status, $message, $data] = (new ApiService)->tests($category);
        if(!$status) return [];

        $tests = collect($data);
        if($request->limit) $tests->take($request->limit);
        return $tests->toArray();
    }

    function medicationCategories(){
        [$status, $message, $data] = (new ApiService)->medicationCategories();
        if(!$status) return null;
        return $data;
    }

    function medications($category){
        [$status, $message, $data] = (new ApiService)->medications($category);
        if(!$status) return null;
        return $data;
    }

}
