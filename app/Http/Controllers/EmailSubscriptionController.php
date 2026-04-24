<?php

namespace App\Http\Controllers;

use App\Services\EmailSubscriptionService;
use Illuminate\Http\Request;

class EmailSubscriptionController extends Controller {
    
    function subscribe(Request $request, EmailSubscriptionService $emailSubscriptionService) {
        $request->validate([
            'email_address' => 'required|email'
        ]);

        [$status, $message] = $emailSubscriptionService->subscribe([
            'Email Address' => $request->email_address
        ]);

        if(!$status) return back()->with('error', $message);
        
        return back()->with('success', $message);
    }
}
