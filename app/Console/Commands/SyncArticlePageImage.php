<?php

namespace App\Console\Commands;

use App\Models\Article;
use Illuminate\Console\Command;
use Intervention\Image\ImageManagerStatic;

class SyncArticlePageImage extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cocoyo:sync-article-page-image';

    /**
     * 将所有文章图片裁剪符合各个端显示
     * 向下兼容以前图片
     *
     * @var string
     */
    protected $description = '将所有文章图片裁剪符合各个端显示';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $articles = Article::get();

        foreach ($articles as $article) {
            // 文件路径
            $file_path = public_path($article->page_image);
            $image = ImageManagerStatic::make($file_path);

            // 进行大小调整的操作 PC端显示
            $image->resize(568, 200)->save($file_path);

            // 进行大小调整的操作 小程序端显示
            $image->resize(372, 110)->save($file_path . '_372x110px' . strrchr($article->page_image, '.'));

            // 进行大小调整的操作 小程序分享显示
            $image->resize(500, 400)->save($file_path . '_500x400px' . strrchr($article->page_image, '.'));

            $this->info('替换文章成功!ID:' . $article->id);
        }
    }
}
