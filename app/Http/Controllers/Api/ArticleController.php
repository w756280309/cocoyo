<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Http\Resources\Article as ArticleResource;
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
        $articles = Article::latest()->paginate(6);

        $articles->load(['user', 'category']);

        return ArticleResource::collection($articles);
    }

    public function show($slug)
    {
        $article = Article::where('slug', $slug)->first();

        $article->load(['user']);

        return new ArticleResource($article);
    }
}
