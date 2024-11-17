<?php

namespace App\Http\Middleware;

use App\Services\AuthService;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // $request->session()->get('toast') ? dd($request->session()->get('toast')) : null;
        return [
            ...parent::share($request),
            'auth' => [
                'user' => (new AuthService)->user(),
            ],
            'toast' =>  $request->session()->get('toast'),
            'flash' => $request->session()->get('flash'),
            'social' => [
                'instagram' => 'https://www.instagram.com/healthbubba?igsh=ZmMyOXJ1a3hpZTZh',
                'facebook' => 'https://www.facebook.com/profile.php?id=61559440283914&mibextid=ZbWKwL',
                'linkedin' => 'https://www.linkedin.com/company/healthbubba/',
                'twitter' => 'https://x.com/Health_Bubba?t=BQIT7mD2BH9H9D1WBYo6vg&s=09',
                'threads' => 'https://www.threads.net/@healthbubba'
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'content' => env('API_URL').'/uploads/images/'
        ];
    }
}
