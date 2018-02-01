<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\Tag as TagResource;
use App\Modules\Tag;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $tags = Tag::latest();

        if ($request->has('type') && $request->input('type') == 'all') {
            $tags = $tags->get();
        } else {
            $tags = $tags->paginate(10);
        }

        return TagResource::collection($tags);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'tag' => 'required|min:1|max:15',
            'title' => 'required',
            'meta_description' => 'required'
        ]);

        Tag::create($request->all());

        return $this->noContent();
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param Tag $tag
     * @return TagResource
     */
    public function edit(Tag $tag)
    {
        return new TagResource($tag);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Tag $tag
     * @param  \Illuminate\Http\Request $request
     * @return \Response
     */
    public function update(Tag $tag, Request $request)
    {
        $this->validate($request, [
            'tag' => 'required|min:1|max:15',
            'title' => 'required',
            'meta_description' => 'required'
        ]);

        $tag->fill($request->all());

        $tag->save();

        return $this->noContent();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
