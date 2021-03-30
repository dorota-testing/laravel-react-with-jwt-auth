<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserApiTest extends TestCase
{
    use WithFaker;
    // use RefreshDatabase;

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
}
