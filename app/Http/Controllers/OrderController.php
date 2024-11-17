<?php

namespace App\Http\Controllers;

use App\Services\ApiService;
use Illuminate\Http\Request;

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
                'productType' => strtoupper($product['type']),
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
        // [$status, $message, $data] = $this->apiService->addToCart($products->toArray()); 

        dd($message, $data, $status);
        if(!$status) {
            toast($message)->error();
            return back();
        }   

        [$status, $message, $data] = $this->apiService->payOrder($data['order_id'], $products->sum('price'));

        if(!$status) {
            toast($message)->error();
            return back();
        }

        return redirect()->away($data['payment']['authorization_url']);
    }
}
