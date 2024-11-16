<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ApiService {

    public $api;

    public function __construct() {
        $this->api = Http::baseUrl(env('API_URL').'/api');
    }

    function resolve($res){
        if(!$res) return [false];
        if(!$data = $res->json()) return [false];
        return [$data['ok'], $data['message'], $data['data'] ?? $data['errors'] ?? ''];
    }

    function register($data) {
        return $this->resolve($this->api->post('register', $data));
    }

    function login($data) {
        return $this->resolve($this->api->post('login', $data));
    }

    function verifyOtp($data) {
        return $this->resolve($this->api->post('verify-otp', $data));
    }

    function testCategories(){
        return $this->resolve($this->api->get('test/categories'));
    }

    function packages($category){
        return $this->resolve($this->api->get("test/{$category}/packages"));
    }

    function tests($category){
        return $this->resolve($this->api->get("test/category/{$category}"));
    }

    function allTests(){
        return $this->resolve($this->api->get("tests"));
    }

    function medicationCategories(){
        return $this->resolve($this->api->get("medication/categories"));
    }

    function medications($category){
        return $this->resolve($this->api->get("medication/category/{$category}"));
    }

}
