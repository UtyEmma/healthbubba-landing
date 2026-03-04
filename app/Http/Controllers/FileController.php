<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller {
    
    function __invoke($path) {    
        return Storage::get($path);
        // dd(storage_path($path));
        // if(!Storage::exists(storage_path($path))) abort(404);
        return Storage::get($path);
    }
}
