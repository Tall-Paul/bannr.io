<?php

namespace App\Http\Controllers;


use App\Http\Requests;
use Auth;
use Session;
use App\User;
use App\Team;
use App\Site;
use Illuminate\Http\Request;

class UsersController extends Controller {


    protected function checkTeam(){
      $team = Session::get('team');
      $team = Team::find($team);
      if ($team == null){
        return null;
      }
      if (!Auth::user()->teams->contains($team)){
        return null;
      }
      return $team;
    }

    public function adduser(){
        $team = $this->checkTeam();
        if ($team == null)
          return redirect()->action('TeamsController@index');
        $email = request('email');
        $user = User::where('email','=', $email)->get()->first();
        if (!$user){
            echo "not found";
        } else {
            if (request('admin')){
                $admin = 1;
            } else {
                $admin = 0;
            }
            $team->users()->attach($user->id,array('admin'=>$admin));
            return redirect()->action('UsersController@frame');
        }


    }

    public function editframe(){
        $team = $this->checkTeam();
        if ($team == null)
          return redirect()->action('TeamsController@index');
        $tier = $team->tier();
        $user = User::find(request('modify'));
        if ($user == null){
            $delete = User::find(request('delete'));
            if ($delete == null){
                return view('users/new/frame');
            } else {
                if (!$team->users->contains($delete)){
                    return redirect()->action('TeamsController@index');
                } else {
                    $team->users()->detach($delete);
                    return redirect()->action('UsersController@frame');
                }
            }
        }
        if (!$team->users->contains($user))
          return redirect()->action('TeamsController@index');
        $data = array(
          'user' => $user,
          'tier' => $tier
        );
        return view('users/edit/frame')->with($data);

    }

    public function frame(){
        $team = $this->checkTeam();
        if ($team == null)
          return redirect()->action('TeamsController@index');
        $source = $team->users()->get()->toArray();
        $grid = \DataGrid::source($source);
        $grid->add('name','Name', true);
        $grid->add('email','Email', true);
        $grid->add('admin','Admin', true);
        //$grid->add('validated','Validated', true);
        $grid->edit('/users/edit/frame', 'Edit','modifyframe|delete');
        $grid->link('/users/edit/frame',"Add New", "TR");  //add button
        $grid->orderBy('name','desc'); //default orderby
        $grid->paginate(10);
        $grid->row(function ($row) {
           $row->cell('_edit')->value->with('id',$row->data['id']);
           if ($row->data['pivot']['admin'] == 1){
               $row->cell('admin')->value('Yes');
           } else {
               $row->cell('admin')->value('No');
           }
        });
        return view('users/frame')->with(array('grid'=>$grid));
    }



}
