<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SeedCategoriesData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $now = \Carbon\Carbon::now()->toDateTimeString();

        $categories = [
            [
                'name'        => '文章',
                'description' => '开发技巧、推荐扩展包等',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name'        => '问答',
                'description' => '问出你所遇到的难题，互帮互助',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name'        => '公告',
                'description' => '站点公告',
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ];

        \Illuminate\Support\Facades\DB::table('categories')->insert($categories);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        \Illuminate\Support\Facades\DB::table('categories')->truncate();
    }
}
