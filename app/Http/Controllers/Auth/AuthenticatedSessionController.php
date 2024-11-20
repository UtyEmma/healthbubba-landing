<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Services\ApiService;
use App\Services\AuthService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller {
    
    function __construct( public AuthService $authService, public ApiService $apiService ){}

    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    public function store(LoginRequest $request): RedirectResponse {
        [$status, $message, $data] = $this->apiService->login($request->validated());

        if(!$status) {
            toast($message)->error();
            return back();
        }

        toast($message)->success();
        
        (new AuthService)->login($data['user'], $data['token']);
        
        // if(!$data['user']['email_verified']) {
        //     toast('Login successful! Please verify your email address')->success();
        //     return to_route('verify-otp', ['email' => $request->email]);
        // }

        return to_route('home');
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
