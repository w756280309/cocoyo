<?php

namespace App\Http\Controllers\Admin;

use App\Models\Article;
use App\Models\Comment;
use App\Models\User;
use App\Models\Visitor;
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
        $users = User::count();
        $articles = Article::count();
        $comments = Comment::count();
        $visitors = Visitor::count();

        return $this->respond(['data' => compact('users', 'articles', 'comments', 'visitors')]);
    }
}
