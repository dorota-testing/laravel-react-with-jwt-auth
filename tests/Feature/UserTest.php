<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic unit test example. Passes if user's id is not 0, which confirms that user was created.
     *
     * @return void
     */
    public function test_user_was_made()
    {
        $user = User::factory()->create();
        $this->assertTrue($user->id != 0);
    }
}
