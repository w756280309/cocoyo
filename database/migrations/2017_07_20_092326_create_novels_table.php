    <?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNovelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('novels', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_id')->comment('用户id 1,2,3形式');
            $table->string('name')->comment('书名');
            $table->string('author')->comment('作者');
            $table->string('description')->comment('描述');
            $table->string('type')->nullable()->comment('类型 都市 修真 就不做另一个表了');
            $table->string('image')->comment('封面图片');
            $table->string('url')->comment('抓取小说的url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('novels');
    }
}
