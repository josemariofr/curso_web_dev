<?php

namespace App\Http\Controllers;

use App\Models\Artigo;
use Illuminate\Http\Request;

class ArtigoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $artigos = Artigo::all();

        return view('artigos.index', ['artigos' => $artigos]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('artigos.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Artigo::create($request->all());

        return redirect()->route('artigos.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Artigo $artigo)
    {
        return view('artigos.show', ['artigo' => $artigo]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Artigo $artigo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Artigo $artigo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Artigo $artigo)
    {
        //
    }
}
