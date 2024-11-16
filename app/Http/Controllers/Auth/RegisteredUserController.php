<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Library\Toast;
use App\Models\User;
use App\Services\ApiService;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{

    function __construct(public ApiService $apiService){

    }

    public function create(): Response {
        return Inertia::render('Auth/Register');
    }

    public function store(Request $request): RedirectResponse {
        $validated = $request->validate([
            'email' => 'required|string|lowercase|email|max:255',
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'password' => ['required', Rules\Password::defaults()],
        ]);

        [$status, $message, $data] = $this->apiService->register($validated);
        
        if(!$status) {
            (new Toast($message))->error();
            return back();
        }

        (new Toast($message))->success();

        return redirect(route(name: 'verify-otp', parameters: ['email' => $request->email], absolute: false));
    }
}
