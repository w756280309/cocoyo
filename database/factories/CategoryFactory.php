<?php

use Faker\Generator as Faker;

$factory->define(\App\Modules\Category::class, function (Faker $faker) {
    return [
        'name' => $faker->firstName,
        'path' => $faker->url,
        'description' => $faker->text
    ];
});
