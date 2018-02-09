<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\Link as LinkResource;
use App\Models\Link;
use App\Services\FileManager\BaseManager;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LinkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return LinkResource::collection(Link::latest()->paginate(10));
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
            'name' => 'required|min:1|max:255',
            'link' => 'required|min:1|max:255',
            'image' => 'required'
        ]);

        Link::create($request->all());

        return $this->noContent();
    }

    /**
     * modify resource status
     *
     * @param Link $link
     * @return \Response
     */
    public function status(Link $link)
    {
        $link->status = ! $link->status;

        $link->save();

        return $this->noContent();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Link $link
     * @return LinkResource
     */
    public function edit(Link $link)
    {
        return new LinkResource($link);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Link $link
     * @param  \Illuminate\Http\Request $request
     * @return \Response
     */
    public function update(Link $link, Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:1|max:255',
            'link' => 'required|min:1|max:255',
            'image' => 'required'
        ]);

       $link->fill($request->all());

       $link->save();

        return $this->noContent();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Response
     */
    public function destroy($id)
    {
        Link::destroy($id);

        return $this->noContent();
    }

    /**
     * upload image the link avatar
     *
     * @param Request $request
     * @param BaseManager $manager
     * @return mixed
     */
    public function upload(Request $request, BaseManager $manager)
    {
        $this->validate($request, [
            'image' => 'required|image'
        ]);

        $path = date('Y') . date('m') . '/' . date('d');

        $resource = $manager->store($request->file('image'), $path);

        return $this->respond($resource);
    }
}
