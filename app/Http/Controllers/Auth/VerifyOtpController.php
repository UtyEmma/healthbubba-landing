<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\ApiService;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class VerifyOtpController extends Controller {

    function __construct(private ApiService $apiService, private AuthService $authService) {

    }
    
    function index(Request $request){
        return Inertia::render('Auth/VerifyOtp', ['email' => $request->email]);
    }

    function store(Request $request) {
        $validated = $request->validate([
            'otp' => 'required|string',
            'email' => 'required|email'
        ]);

        [$status, $message, $data] = $this->apiService->verifyOtp($validated);

        if(!$status) {
            toast($message)->error();
            return back();
        }

        $this->authService->login($data['user'], $data['token']['access_token']);

        toast($message)->success();
        return to_route('home');
    }

}
