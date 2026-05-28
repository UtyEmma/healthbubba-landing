<?php

namespace App\Http\Controllers;

use App\Rules\ValidateEmail;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use TimeHunter\LaravelGoogleReCaptchaV3\Facades\GoogleReCaptchaV3;

class ContactController extends Controller
{
    private const RECAPTCHA_ACTION = 'contact_us';

    private const RECAPTCHA_SCORE_THRESHOLD = 0.5;

    function index(\Spatie\Honeypot\Honeypot $honeypot) {
        return Inertia::render('Contact', compact('honeypot'));
    }
    
    function sendMessage(Request $request, ) {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required', 'email', new ValidateEmail],
            'phone' => 'required|numeric',
            'message' => 'required|string',
            'g-recaptcha-response' => [
                'required',
                'string',
                function ($attribute, $value, $fail) use ($request) {
                    $response = GoogleReCaptchaV3::setScore(self::RECAPTCHA_SCORE_THRESHOLD)
                        ->setAction(self::RECAPTCHA_ACTION)
                        ->verifyResponse($value, $request->getClientIp());

                    if (! $response->isSuccess()) {
                        $fail('We could not verify that you are human. Please try again.');
                    }
                },
            ],
        ]);

        $emails = explode(',', env("CONTACT_EMAILS"));
            
        try {
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
        } catch (\Throwable $th) {
            //throw $th;
        }

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
