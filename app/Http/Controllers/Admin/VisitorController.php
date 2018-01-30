<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\Visitor as VisitorResource;
use App\Modules\Visitor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VisitorController extends Controller
{
    public function index()
    {
        return VisitorResource::collection(Visitor::latest()->paginate(10)); 
    }
}
