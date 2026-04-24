<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Throwable;

class EmailSubscriptionService {

    function client() {
        $accessToken = env('ZOHO_ACCESS_TOKEN', env('ZOHO_OAUTH_TOKEN', env('ZOHO_CLIENT_SECRET')));

        return Http::baseUrl('https://campaigns.zoho.com/api/v1.1/json')
                    ->withHeaders([
                        // 'Authorization' => 'Zoho-oauthtoken ' . $accessToken,
                        'Content-Type'  => 'application/x-www-form-urlencoded',
                    ])->asForm();
    }

    function accessToken() {
        $request = Http::withHeaders([
                        'Content-Type'  => 'application/x-www-form-urlencoded',
                    ])->asForm()
                    ->post('https://accounts.zoho.com/oauth/v2/token', [
                        'client_id' => env('ZOHO_CLIENT_ID'),
                        'client_secret' => env('ZOHO_CLIENT_SECRET'),
                        'grant_type' => 'client_credentials',
                        'scope' => 'ZohoCampaigns.contact.ALL',
                        'soid' => "ZohoCampaigns.".env('ZOHO_ORG_ID')
                    ]);

        $data = $request->json();

        return $data;
    }

    function subscribe($details) {
        $listKey = env('ZOHO_LIST_KEY');
        $accessToken = env('ZOHO_ACCESS_TOKEN', env('ZOHO_OAUTH_TOKEN', env('ZOHO_CLIENT_SECRET')));

        if(blank($listKey) || blank($accessToken)) {
            return [false, 'Email subscription is not configured right now. Please try again later.'];
        }

        $contactInfo = $this->formatContactInfo($details);

        if(blank($contactInfo['Contact Email'] ?? null)) {
            return [false, 'A valid email address is required.'];
        }

        $token = $this->accessToken();

        try {
            $response = $this->client()
                ->withToken($token['access_token'], $token['token_type'])
                ->post('listsubscribe', [
                    'listkey' => $listKey,
                    'resfmt' => 'JSON',
                    'contactinfo' => json_encode($contactInfo, JSON_UNESCAPED_SLASHES),
                    'source' => 'Website',
                ]);
        } catch (Throwable $exception) {
            Log::error('Zoho subscription request failed.', [
                'message' => $exception->getMessage(),
            ]);

            return [false, 'Unable to add subscriber right now. Please try again later.'];
        }

        if(!$response->ok()) {
            Log::warning('Zoho subscription returned a non-success response.', [
                'status' => $response->status(),
                'body' => $response->body(),
            ]);

            return [false, 'Unable to add subscriber right now. Please try again later.'];
        }

        if(!$data = $response->json()) {
            Log::warning('Zoho subscription returned an invalid response body.', [
                'body' => $response->body(),
            ]);

            return [false, 'Unable to add subscriber. Invalid response from email provider.'];
        }

        if((string) ($data['code'] ?? '') === '0') {
            return [true, $data['message'] ?? 'Subscription request sent successfully.'];
        }

        Log::info('Zoho subscription was rejected.', [
            'response' => $data,
        ]);

        return [false, $data['message'] ?? 'Unable to add subscriber. Please try again.'];
    }

    protected function formatContactInfo(array $details): array
    {
        $email = $details['Contact Email'] ?? $details['Email Address'] ?? $details['email_address'] ?? null;

        $contactInfo = array_filter($details, function ($value) {
            return filled($value);
        });

        unset($contactInfo['Email Address'], $contactInfo['email_address']);

        if(filled($email)) {
            $contactInfo['Contact Email'] = $email;
        }

        return $contactInfo;
    }

}
