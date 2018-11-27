<?php

use Illuminate\Database\Seeder;
use Illuminate\Foundation\Auth\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = Array(
          'name' => 'admin',
          'email' => 'admin@bannr.io',
          'password' => Hash::make('changeme'),
          'superuser' => 1
        );
        User::insert($user);
    }
}
