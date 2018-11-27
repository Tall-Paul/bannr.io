<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use Auth;

class HomeController extends Controller
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

        if (Auth::user()){
            if (Auth::user()->email == 'demo@bannr.io')
                return redirect('https://admin.bannr.io/sites/edit?modify=6');
            else
                return redirect()->action('TeamsController@index');
        } else {
            return redirect('/login');
        }

    }


}
