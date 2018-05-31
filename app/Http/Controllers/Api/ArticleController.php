<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Http\Resources\ArticleResource;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * 文章列表
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $articles = Article::latest()->withCount('comments')->valid()->paginate(6);

        $articles->load(['user', 'category', 'tags']);

        return ArticleResource::collection($articles);
    }

    /**
     * 文章详情
     *
     * @param $slug
     * @return ArticleResource
     */
    public function show($slug)
    {
        $article = Article::where('slug', $slug)->first();

        $article->load(['user', 'tags']);

        $article->recordVisit();

        return new ArticleResource($article);
    }
}
