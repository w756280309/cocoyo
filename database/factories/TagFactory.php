<?php

use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'tag' => $faker->name,
        'meta_description' => $faker->text(100)
    ];
});
