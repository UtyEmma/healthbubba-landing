<?php

use App\Library\Toast;


if(!function_exists('toast')) {
    function toast($message, $title = null){
        return new Toast($message, $title);
    }
}