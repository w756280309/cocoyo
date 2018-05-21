<?php

namespace App\Console\Commands;

use App\Models\Article;
use Illuminate\Console\Command;

class SyncDatabaseVisit extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cocoyo:sync-database-visit';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '将访问数从 Redis 同步到数据库中';

    /**
     * Execute the console command.
     *
     * @param Article $article
     * @return mixed
     */
    public function handle(Article $article)
    {
        $article->syncDatabaseVisit();
        $this->info('同步成功');
    }
}
