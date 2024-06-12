<?php

namespace App\Http\Controllers;

use App\Services\ApiService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ApiController extends Controller {

    function testCategories(){
        return (new ApiService)->testCategories();
    }

    function packages($category){
        return (new ApiService)->packages($category);
    }

    function tests($category){
        return (new ApiService)->tests($category);
    }

    function medicationCategories(){
        return (new ApiService)->medicationCategories();
    }

    function medications($category){
        return (new ApiService)->medications($category);
    }

}
