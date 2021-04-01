<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReactController extends Controller
{
    /**
     * Show the home pge.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function react()
    {
        $array = [
            'appName'=>(config('app.name', 'Laravel')), 
            'baseUrl'=>url('/')
        ];
        //echo(__('Toggle navigation'));
       // die();
        return view('react')->withData(json_encode($array));
    }
}
