<?php

use Illuminate\Database\Seeder;
use App\Tier;

class TierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $tier = Array(
        'name' => 'beta',
        'special' => 1
      );
      Tier::insert($tier);
    }
}
