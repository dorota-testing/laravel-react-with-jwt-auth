<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    /**
     * Show the home pge.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $array = [
            'appName'=>(config('app.name', 'Laravel')), 
            'baseUrl'=>url('/')
        ];
        //echo(__('Toggle navigation'));
       // die();
        return view('welcome')->withData(json_encode($array));
    }
}
