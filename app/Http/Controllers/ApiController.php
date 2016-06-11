<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests;
use Illuminate\Http\Request;
use Session;
use App\User;
use App\Team;
use App\Site;
use App\Campaign;
use App\Template;

class ApiController extends Controller
{

    protected function error($message){
      $dat = Array('status'=>'error','message'=>$message);
      $out = Array('data'=>json_encode($dat));
      return view('api/error')->with($out);
    }


    protected function checkTeam($site_id = 0){
      $team = Session::get('team');
      $team = Team::find($team);
      if ($team == null){
        //TODO log hacking attempt
        $this->error('access control error');
      }
      if (!Auth::user()->teams->contains($team)){
        //TODO log hacking attempt
        $this->error('access control error');
      }
      if ($site_id > 0){
        $site = Site::find($site_id);
        if (!$team->sites->contains($site)){
          $this->error('access control error');
        }
      }

      return $team;
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getSite($site_id){
      $team = $this->checkTeam($site_id);
      $site = Site::find($site_id);
      $out = Array('data'=>json_encode($site->toArray()));
      return view('api/response')->with($out);
    }

    public function getTemplates($site_id){
      $team = $this->checkTeam($site_id);
      $site = Site::find($site_id);
      $out = Array('data'=>json_encode($site->templates->toArray()));
      return view('api/response')->with($out);
    }

    public function postTemplate($site_id,$template_id){
      $team = $this->checkTeam($site_id);
      $site = Site::find($site_id);
      if ($template_id == 'new'){
        $template = new Template();
      } else {
        $template = Template::find($template_id);
        if (!$site->templates->contains($template)){
          $this->error('Access control error');
        }
      }
      $template->name = request('name');
      $template->html = request('html');
      $template->target = request('target');
      $template->inject = request('inject');
      $template->javascript = request('js');
      $template->site_id = $site_id;
      $template->defaults = json_encode(request('defaults'));
      $template->save();
      $data = Array('status'=>'success','template_id'=>$template->id);
      $out = Array('data'=>json_encode($data));
      return view('api/response')->with($out);
    }

    public function getCampaigns($site_id){
      $team = $this->checkTeam($site_id);
      $site = Site::find($site_id);
      $out = Array('data'=>json_encode($site->campaigns()->with('templates')->get()->toArray()));
      return view('api/response')->with($out);
    }

    public function postCampaign($site_id,$campaign_id){
      $team = $this->checkTeam($site_id);
      $site = Site::find($site_id);
      if ($campaign_id == 'new'){
        $campaign = new Campaign();
      } else {
        $campaign = Campaign::find($campaign_id);
        if (!$site->campaigns->contains($campaign)){
          $this->error('Access control error');
        }
      }
      $campaign->name = request('name');
      $campaign->data = json_encode(request('templates'));

      $campaign->site_id = $site_id;
      $campaign->save();
      $campaign->templates()->detach();
      foreach(request('templates') as $template_name=>$placeholders){
        $template_name = str_replace('template_','',$template_name);
        $campaign->templates()->attach($template_name);
      }
      $data = Array('status'=>'success','campaign_id'=>$campaign->id);
      $out = Array('data'=>json_encode($data));
      return view('api/response')->with($out);

    }

    public function getSchedules($site_id){
      $team = $this->checkTeam($site_id);
      $site = Site::find($site_id);
      $out = Array('data'=>json_encode($site->schedules()->with('campaigns')->get()->toArray()));
      return view('api/response')->with($out);
    }

    public function postSchedule($site_id,$schedule_id){

    }
}
