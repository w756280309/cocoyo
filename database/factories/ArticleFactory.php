<?php

use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'category_id' => function () {
            return factory(\App\Models\Article::class)->create()->id;
        },
        'user_id' => function () {
            return factory(\App\Models\User::class)->create()->id;
        },
        'last_user_id' => function () {
            return factory(\App\Models\User::class)->create()->id;
        },
        'slug' => $faker->slug,
        'title' => $faker->title,
        'content' => $faker->text,
        'page_image' => $faker->imageUrl(),
        'meta_description' => $faker->text(100),
        'view_count' => $faker->randomNumber(),
        'published_at' => $faker->date('Y-m-d H:i:s')
    ];
});
