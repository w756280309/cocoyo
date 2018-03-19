<?php

namespace App\Http\Controllers\Admin;

use App\Models\Article;
use App\Models\Comment;
use App\Models\User;
use App\Models\Visitor;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('dashboard.index');
    }

    /**
     * @return mixed
     */
    public function statistics()
    {
        $users = User::whereDate('created_at', Carbon::now()->toDateString())->count();
        $articles = Article::whereDate('created_at', Carbon::now()->toDateString())->count();
        $comments = Comment::whereDate('created_at', Carbon::now()->toDateString())->count();
        $visitors = Visitor::whereDate('created_at', Carbon::now()->toDateString())->count();

        return $this->respond(['data' => compact('users', 'articles', 'comments', 'visitors')]);
    }
}
