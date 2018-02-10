<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ArticleRequest;
use App\Http\Resources\Article as ArticleResource;
use App\Models\Article;
use App\Services\FileManager\BaseManager;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $articles = Article::latest()->paginate(10);

        $articles->load(['user', 'category', 'tags']);

        return ArticleResource::collection($articles);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Response
     */
    public function store(ArticleRequest $request)
    {
        $data = array_merge($request->all(), [
            'user_id' => $request->user()->id,
            'last_user_id' => $request->user()->id
        ]);

        $article = Article::create($data);

        $article->tags()->sync(json_decode($request->input('tags')));

        return $this->noContent();
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param Article $article
     * @return ArticleResource
     */
    public function edit(Article $article)
    {
        $article->load(['user', 'category', 'tags']);

        return new ArticleResource($article);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Article $article
     * @param  \Illuminate\Http\Request $request
     * @return \Response
     */
    public function update(Article $article, Request $request)
    {
        $data = array_merge($request->all(), [
            'last_user_id' => $request->user()->id
        ]);

        $article->fill($data);

        $article->save();

        $article->tags()->sync(json_decode($request->get('tags')));

        return $this->noContent();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Article $article
     * @return \Response
     * @throws \Exception
     */
    public function destroy(Article $article)
    {
        $article->tags()->detach();

        $article->delete();

        return $this->noContent();
    }
}
