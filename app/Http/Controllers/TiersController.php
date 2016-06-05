<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Auth;
use App\Tier;
use App\User;
use App\Site;
use Illuminate\Http\Request;

class TiersController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::user()->superuser != 1)
          return redirect()->action('TeamsController@index');

        $grid = \DataGrid::source('tiers');
        $grid->add('name','Name', true);
        $grid->add('special','Special', true);
        $grid->add('users','Users', true);
        $grid->add('sites','Sites', true);
        $grid->add('templates','Templates', true);
        $grid->add('campaigns','Campaigns', true);

        $grid->edit('/tiers/edit', 'Edit','modify|delete');
        $grid->link('/tiers/edit',"Add New", "TR");  //add button
        $grid->orderBy('name','desc'); //default orderby
        $grid->paginate(10);

        $data = array(
          'grid' => $grid,

        );
        return view('tiers')->with($data);
    }

    public function edit(){
      $edit = \DataEdit::source(new Tier);
      $edit->link("tiers","Tiers", "TR")->back();
      $edit->add('name','Name', 'text')->rule('required');
      $edit->checkbox('special','Special');
      $edit->add('users','Users', 'text')->insertValue('0');
      $edit->add('templates','Templates', 'text')->insertValue('0');
      $edit->add('campaigns','Campaigns', 'text')->insertValue('0');
      $edit->add('sites','Sites', 'text')->insertValue('0');

      return $edit->view('tiers/edit', compact('edit'));

    }
}
