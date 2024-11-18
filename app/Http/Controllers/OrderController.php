<?php

namespace App\Http\Controllers;

use App\Services\ApiService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class OrderController extends Controller {

    public function __construct(public ApiService $apiService) { }

    function store(Request $request){
        $request->validate([
            'address' => 'required|string',
            'products' => 'required|array'
        ]); 

        $products = collect($request->products)->map(function($product){
            return [
                'productId' => $product['id'],
                'productType' => str($product['type'])->headline(),
                'productName' => $product['name'],
                'quantity' => $product['quantity'],
                'price' => $product['price']
            ];
        });
    
        $order = [
            'deliveryAddress' => $request->address,
            'items' => $products->toArray(),
            'orderValue' => $products->sum('price'),
            'deliveryFee' => '',
            'serviceFee' => ''
        ];

        [$status, $message, $data] = $this->apiService->createOrder($order); 

        if(!$status) {
            toast($message)->error();
            return back();
        }   

        if(!isset($data['order'][0])){
            toast("No Order set")->error();
            return back();
        }

        $order = $data['order'][0];

        try {
            [$status, $order] = $this->apiService->payOrder($order, $products->sum('price'));
    
            if(!$status) {
                toast($message)->error();
                return back();
            }

            [   
                'message' => $message,
                'data' => $order
            ] = $order;

            toast($message)->success();
            return back()->with([
                'flash' => [
                    'url' => $order['payment']['authorization_url']
                ]
            ]);
        } catch (\Throwable $th) {
            Log::error("{$th->getCode()} - {$th->getMessage()}");
            toast("Your order could not be initiated at the moment")->error();
            return back();
        }
        
    }

    function success(Request $request){
        return Inertia::render('Checkout/CheckoutSuccess');
    }

    function cancelled(Request $request){
        return Inertia::render('Checkout/CheckoutSuccess');
    }
}
