<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Authenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(!session()->has('user')) {
            session()->put('url.intended', $request->fullUrl());
            toast("You must login to access this page.")->error();
            return to_route('login');
        }

        return $next($request);
    }
}
