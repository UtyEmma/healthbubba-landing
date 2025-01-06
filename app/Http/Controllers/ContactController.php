<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    function index() {
        return Inertia::render('Contact');
    }
    
    function sendMessage(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|numeric',
            'message' => 'required|string'
        ]);

        $emails = ['support@healthbubba.com', 'utyemma@gmail.com'];

    notify("Action Required: New Inquiry from {$request->name}")
        ->greeting("Hello Healthbubba Admin,")
        ->line('You have received a new inquiry on the Healthbubba website.')
        ->line('Here are the details:')
        ->line("**Name:** {$request->name}")
        ->line("**Email Address:** {$request->email}")
        ->line("**Phone Number:** {$request->phone}")
        ->line("**Message:** {$request->message}")
        ->line('Please review and respond promptly.')
        ->replyTo($request->email, $request->name)
        ->mail($emails);

    notify("Thank You for Reaching Out, {$request->name}!")
        ->greeting("Hello {$request->name},")
        ->line('Thank you for contacting Healthbubba. We have received your message and our team will review it shortly.')
        ->line('Here’s a summary of your submission:')
        ->line("**Name:** {$request->name}")
        ->line("**Email Address:** {$request->email}")
        ->line("**Phone Number:** {$request->phone}")
        ->line("**Message:** {$request->message}")
        ->line('Our team will get back to you within the next 24-48 hours. If your matter is urgent, feel free to contact us directly.')
        ->salutation('Best regards, The Healthbubba Team')
        ->mail($request->email);

    

        toast('Your message has been submitted successfully! Our team will be in touch with you soon.', 'Message Sent')->success();

        return back();
    }

}
