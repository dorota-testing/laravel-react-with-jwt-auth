<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Models\User;

class AuthController extends Controller
{
    public function __construct()
    {
        // this makes it so that calls to login and register are not protected
        $this->middleware('auth:api', ['except' => ['login','denied', 'register']]);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6'
        ]);
        if ($validator->fails()) {
            return response()->json([$validator->errors()], 400);
        }
        //how long token lasts in minutes
        $token_validity = 24 * 60;

        $this->guard()->factory()->setTTL($token_validity);

        if (! $token = $this->guard()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 400);
        }

        // make refresh token
        $refresh_token = Str::random(10);

        // save refresh token in the db !!!!
        $userId = $this->guard()->user()->id;
        // echo ($userId);
        $user = User::find($userId); 
        $user->refresh_token = $refresh_token;
        $user->save();

        return $this->respondWithToken($token, $refresh_token);
    }

    public function denied()
    {      
        return response()->json(["error"=>"Not authorised. Access denied"], 400);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6'
        ]);
        if ($validator->fails()) {
            return response()->json([$validator->errors()], 422);
        }
        $user = User::create(
            array_merge(
                $validator->validated(),
                ['password' => bcrypt($request->password)]
            )
        );

        return response()->json(['message'=>'User created successfully','user'=>$user]);
    }

    public function logout()
    {
        $this->guard()->logout();
        return response()->json(['message'=>'User logged out sucessfully']);
    }

    public function profile()
    {
        return response()->json($this->guard()->user());
    }

    public function refresh()
    {
        return $this->respondWithToken($this->guard()->refresh());
    }

    private function respondWithToken($token, $refresh_token = '')
    {
        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'token_validity' => $this->guard()->factory()->getTTL() * 60 ,
            'refresh_token' => $refresh_token
        ]);
    }

    private function guard()
    {
        return Auth::guard();
    }
}
