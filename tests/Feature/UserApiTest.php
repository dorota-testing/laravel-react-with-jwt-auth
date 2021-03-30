<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Support\Facades\Http;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserApiTest extends TestCase
{
    use WithFaker;
    //use RefreshDatabase;

    /**
     * This tests if anyone can register.
     *
     * @return void
     */
    public function test_can_anyone_register()
    {
        $userData = [
            'name' => $this->faker->name(),
            'email' => $this->faker->email(),
            'password' => 'loremipsum'
        ];

        //print_r($userData);

        $this->withoutExceptionHandling();

        // to find out available routes we can run: php artisan route:list
        // route('name') - not all routes have names! Better to use full uri, exmpale: 'api/auth/register'
        $this->json('POST', route('register1'), $userData)
            ->assertStatus(200);
    }

    /**
     * This creates user and tests if this user can log in.
     *
     * @return void
     */
    public function test_can_user_login()
    {
        // create user
        $user = User::factory()->create([
            'password' => bcrypt('lorempsum')
        ]);
        // set user credentials
        $userData = [
            'email' => $user->email,
            'password' => 'lorempsum'
        ];

        //print_r($userData);
        // test login via api
        $this->withoutExceptionHandling(); //this allows showing laravel errors

        $response = $this->json('post', 'api/auth/login', $userData);
        // var_dump($response->original);
        $response->assertStatus(200);
    }

    /**
     * This creates user and gets their profile.
     *
     * @return void
     */
    public function test_get_user_profile()
    {
        // create user
        $user = User::factory()->create([
            'password' => bcrypt('lorempsum')
        ]);
        // set user credentials
        $userData = [
            'email' => $user->email,
            'password' => 'lorempsum'
        ];

        $this->withoutExceptionHandling(); //this allows showing laravel errors

        // get the token
        $loginResponse = $this->json('post', 'api/auth/login', $userData);
        //var_dump($loginResponse->original);
        $token = $loginResponse->original["token"];
        //var_dump($token);

        $profileResponse = $this->json('get', 'api/auth/profile', ["token" => $token]);
        //var_dump($profileResponse->original);
        $profileResponse->assertStatus(200);
    }

    /**
     * This creates user, logs them in and then out.
     *
     * @return void
     */
    public function test_can_user_logout()
    {
        // create user
        $user = User::factory()->create([
            'password' => bcrypt('loremipsum')
        ]);
        // set user credentials
        $userData = [
            'email' => $user->email,
            'password' => 'loremipsum'
        ];

        $this->withoutExceptionHandling(); //this allows showing laravel errors

        // get the token
        $loginResponse = $this->json('post', 'api/auth/login', $userData);
        //var_dump($loginResponse->original);
        $token = $loginResponse->original["token"];
        //var_dump($token);

        $profileResponse = $this->json('post', 'api/auth/logout', ["token" => $token]);
        //var_dump($profileResponse->original);
        $profileResponse->assertStatus(200);
    }
    /**
     * This tests connection to a third party api (googlebooks open api).
     *
     * @return void
     */
    public function test_call_to_googlebooks()
    {
        $response = Http::get('https://www.googleapis.com/books/v1/volumes/kLAoswEACAAJ');
        //print_r($response);
        //print_r($response->json());

        // this is guzzle method. It must be used with guzzle Http::get
        $status = $response->status();
        // var_dump('status= '.$response->status());
        $this->assertEquals($status, 200);
    }
}
