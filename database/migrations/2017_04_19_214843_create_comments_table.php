<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('user_id')->comment('评论用户id');
            $table->unsignedBigInteger('reply_user_id')->default(0)->comment('回复用户id');
            $table->unsignedBigInteger('commentable_id')->comment('评论id');
            $table->string('commentable_type')->comment('评论类型');
            $table->integer('level')->default(0)->comment('等级');
            $table->integer('parent_id')->index()->nullable()->comment('父级id');
            $table->text('content')->comment('评论内容');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
