<?php

namespace App\Services;

class AuthService {

    function login($user, $token){
        session([
            'user' => encrypt($user),
            'token' => encrypt($token)
        ]);

        return true;
    }

    function user(){
        return session()->has('user') ? decrypt(session()->get('user')) : null;
    }

    function token(){
        return session()->has('token') ? decrypt(session()->get('token')) : null;
    }

    function logout(){
        session()->remove('user');
        session()->remove('token');

        return abort(to_route('home'));
    }

}