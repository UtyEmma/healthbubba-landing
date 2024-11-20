<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class VerifiedEmail
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = session('user');
        if(!$user['email_verified']) {
            toast('Please verify your email address')->error();
            return to_route('verify-otp', ['email' => $user['email']]);
        }
        return $next($request);
    }
}
