<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Auth;
use DB;
use Session;
use App\Team;
use App\Tier;
use App\User;
use App\Site;
use Illuminate\Http\Request;

class TeamsController extends Controller
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

        $source = Auth::user()->teams()->join('tiers','tiers.id', '=', 'teams.tier_id')->get(array('teams.*','tiers.name as tierName'))->toArray();

        $grid = \DataGrid::source($source);
        $grid->add('name','Name', true);
        $grid->add('tierName','Tier', true);
        $grid->edit('/teams/edit', 'Edit','modify|delete');
        $grid->link('/teams/edit',"Add New", "TR");  //add button
        $grid->orderBy('name','desc'); //default orderby
        $grid->paginate(10);
        $grid->row(function ($row) {
           $row->cell('_edit')->value->with('id',$row->data['id']);
        });

        $data = array(
          'grid' => $grid,

        );
        return view('teams')->with($data);
    }

    public function edit(){
      $edit = \DataEdit::source(new Team);
      $edit->set('user',Auth::user());
      $edit->link("/teams","Back", "TR")->back();
      $edit->add('name','Name', 'text')->rule('required');
      $edit->add('tier_id','Tiers','checkboxgroup')
        ->options(Tier::lists("name", "id")->all());
      if (request('modify')){
        $team = Team::find(request('modify'));
        if ($team == null){
          //TODO log hacking attempt
          return redirect()->action('TeamsController@index');
        }
        if (!Auth::user()->teams->contains($team)){
          //TODO log hacking attempt
          return redirect()->action('TeamsController@index');
        }
        Session::put('team', request('modify'));
        $edit->add('site','Sites','iframe')->src('/sites/frame');
      }
      return $edit->view('teams/edit', compact('edit'));

    }
}
