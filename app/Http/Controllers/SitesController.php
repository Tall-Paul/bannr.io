<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Auth;
use Session;
use App\User;
use App\Team;
use App\Site;
use Illuminate\Http\Request;

class SitesController extends Controller
{

    public $team = null;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');

    }

    protected function checkTeam(){
      $team = Session::get('team');;
      $team = Team::find($team);
      if ($team == null){
        //TODO log hacking attempt
        redirect()->action('TeamsController@index');
      }
      if (!Auth::user()->teams->contains($team)){
        //TODO log hacking attempt
        redirect()->action('TeamsController@index');
      }
      return $team;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->checkTeam();
        $grid = \DataGrid::source(Site::with('users'));
        $grid->add('name','Name', true);
        $grid->add('url','Url', true);
        $grid->add('validated','Validated', true);
        $grid->edit('/sites/edit', 'Edit','modify|delete');
        $grid->link('/sites/edit',"Add New", "TR");  //add button
        $grid->orderBy('name','desc'); //default orderby
        $grid->paginate(10);
        $data = array(
          'sites' => Auth::user()->sites,
          'user' => Auth::user(),
          'grid' => $grid,

        );
        return view('sites')->with($data);
    }

    public function frame(){

      $team = $this->checkTeam();
      $source = $team->sites()->get()->toArray();
      $grid = \DataGrid::source($source);
      $grid->add('name','Name', true);
      $grid->add('url','Url', true);
      $grid->add('validated','Validated', true);
      $grid->edit('/sites/edit', 'Edit','modify|delete');
      $grid->link('/sites/edit/frame',"Add New", "TR");  //add button
      $grid->orderBy('name','desc'); //default orderby
      $grid->paginate(10);
      $grid->row(function ($row) {
         $row->cell('_edit')->value->with('id',$row->data['id']);
      });

      return view('sites/frame')->with(array('grid'=>$grid));

    }

    public function editframe(){
      $team = $this->checkTeam();
      $edit = \DataEdit::source(new Site);
      $edit->set('team_id',$team->id);
      $edit->add('name','Name', 'text')->rule('required');
      $edit->add('url','URL', 'text')->rule('required');
      $edit->link("/sites/frame","Back", "TR")->back();
      return $edit->view('sites/edit/frame', compact('edit'));
    }

    public function edit(){
      $team = $this->checkTeam();
      $site = Site::find(request('modify'));
      if (request('modify')){
        if ($site == null)
          $new = true;
        else
          $new = false;
      }
      else {
        $new = true;
      }

      $data = array(
        'site' => $site,
        'new' => $new
      );
      return view('sites/edit')->with($data);
    }
}
