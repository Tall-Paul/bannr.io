<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Contracts\Filesystem\Filesystem;
use League\Flysystem\AwsS3v3\AwsS3Adapter;
use Validator;
use Session;
use Carbon;
use Cache;
use App\User;
use App\Team;
use App\Site;
use App\Campaign;
use App\Template;
use App\Schedule;

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
        return null;
      }
      if (!Auth::user()->teams->contains($team)){
        //TODO log hacking attempt
        return null;
      }
      if ($site_id > 0){
        $site = Site::find($site_id);
        if (!$team->sites->contains($site)){
          return null;
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
        //$this->middleware('auth');
    }

    public function postSite($site_id){
        $team = $this->checkTeam($site_id);
        if ($team == null)
          return $this->error("Access Control Error");
        $site = Site::find($site_id);
        $site->name = request('name');
        $site->url = request('url');
        $site->save();
        $out = Array('data'=>json_encode($site->toArray()));
        return view('api/response')->with($out);
    }

    public function getSite($site_id){
      $team = $this->checkTeam($site_id);
      if ($team == null)
        return $this->error("Access Control Error");
      $site = Site::find($site_id);
      $out = Array('data'=>json_encode($site->toArray()));
      return view('api/response')->with($out);
    }

    public function getTemplates($site_id){
      $team = $this->checkTeam($site_id);
      if ($team == null)
        return $this->error("Access Control Error");
      $site = Site::find($site_id);
      $out = Array('data'=>json_encode($site->templates->toArray()));
      return view('api/response')->with($out);
    }

    public function postTemplate($site_id,$template_id){
      $team = $this->checkTeam($site_id);
      if ($team == null)
        return $this->error("Access Control Error");
      $site = Site::find($site_id);
      if ($template_id == 'new'){
        $template = new Template();
      } else {
        $template = Template::find($template_id);
        if (!$site->templates->contains($template)){
          $this->error('Access control error');
        }
      }
      if (request('delete') == true){
        $template->delete();
      } else {
          $template->name = request('name');
          $template->html = request('html');
          $template->target = request('target');
          $template->inject = request('inject');
          $template->javascript = request('js');
          $template->site_id = $site_id;
          $template->defaults = json_encode(request('defaults'));
          $template->save();
      }
      $data = Array('status'=>'success','template_id'=>$template->id);
      $out = Array('data'=>json_encode($data));
      $site->clearCachedSchedules();
      return view('api/response')->with($out);
    }

    public function getCampaigns($site_id){
      $team = $this->checkTeam($site_id);
      if ($team == null)
        return $this->error("Access Control Error");
      $site = Site::find($site_id);
      $out = Array('data'=>json_encode($site->campaigns()->with('templates')->get()->toArray()));
      return view('api/response')->with($out);
    }

    public function postCampaign($site_id,$campaign_id){
      $team = $this->checkTeam($site_id);
      if ($team == null)
        return $this->error("Access Control Error");
      $site = Site::find($site_id);
      if ($campaign_id == 'new'){
        $campaign = new Campaign();
      } else {
        $campaign = Campaign::find($campaign_id);
        if (!$site->campaigns->contains($campaign)){
          $this->error('Access control error');
        }
      }
      if (request('delete') == true){
        $campaign->delete();
      } else {
          $campaign->name = request('name');
          $campaign->data = json_encode(request('templates'));
          $campaign->site_id = $site_id;
          $campaign->save();
          $campaign->templates()->detach();
          foreach(request('templates') as $template_name=>$placeholders){
            $template_name = str_replace('template_','',$template_name);
            $campaign->templates()->attach($template_name);
          }
      }
      $data = Array('status'=>'success','campaign_id'=>$campaign->id);
      $out = Array('data'=>json_encode($data));
      $site->clearCachedSchedules();
      return view('api/response')->with($out);

    }

    private function convertDateFromMysql($sqldate){
        return Carbon\Carbon::createFromFormat('Y-m-d H:i:s',$sqldate)->format('d/m/Y H:i');
    }

    public function getSchedules($site_id){
      $team = $this->checkTeam($site_id);
      if ($team == null)
        return $this->error("Access Control Error");
      $site = Site::find($site_id);
      Carbon\Carbon::setToStringFormat('d/m/Y H:i');
      $dat = $site->schedules()->with('campaigns')->get()->toArray();
      foreach($dat as &$schedule){
           $schedule['start_at'] = $this->convertDateFromMysql($schedule['start_at']);
           $schedule['finish_at'] = $this->convertDateFromMysql($schedule['finish_at']);
      }
      $out = Array('data'=>json_encode($dat));
      return view('api/response')->with($out);
    }

    public function postSchedule($site_id,$schedule_id){
        $team = $this->checkTeam($site_id);
        if ($team == null)
          return $this->error("Access Control Error");
        $site = Site::find($site_id);
        if ($schedule_id == 'new'){
          $schedule = new Schedule();
        } else {
          $schedule = Schedule::find($schedule_id);
          if (!$site->schedules->contains($schedule)){
            return $this->error('Access control error');
          }
        }
        if (request('delete') == true){
          $schedule->delete();
        } else {
            $schedule->name = request('name');
            $schedule->site_id = $site_id;
            $schedule->country_codes = request('geo');
            $schedule->start_at = Carbon\Carbon::createFromFormat('d/m/Y H:i', request('begin'));
            $schedule->finish_at = Carbon\Carbon::createFromFormat('d/m/Y H:i', request('finish'));
            $schedule->data = json_encode(request('templates'));
            $schedule->save();
            $schedule->campaigns()->detach();
            foreach(request('campaigns') as $campaign_id){
                $schedule->campaigns()->attach($campaign_id);
            }
        }
        $data = Array('status'=>'success','schedule_id'=>$schedule->id);
        $out = Array('data'=>json_encode($data));
        $site->clearCachedSchedules();
        return view('api/response')->with($out);

    }

    public function getSchedulesForTime($site_id,$time){
        $request_code = null;
            foreach(getallheaders() as $key=>$value){
                if ($key == 'Cf-Ipcountry' && $request_code == null){
                    $request_code = $value;
                }
                if ($key == 'Preview-Ipcountry'){
                    $request_code = $value;
                }
            }

        $site = Site::find($site_id);
        if ($time == 'now')
            $time = Carbon\Carbon::now();
        else
            $time = Carbon\Carbon::createFromFormat('d/m/Y H:i',$time);
        $schedules = Schedule::where('site_id',$site_id)
                        ->where('start_at','<=',$time)
                        ->where('finish_at','>=',$time)
                        ->with('campaigns')
                        ->get()
                        ->toArray();
        $return_default = Array();
        $return_matching = Array();

        foreach($schedules as $schedule){
            if ($schedule['country_codes'] !== null && $schedule['country_codes'] !== ""){
                if (in_array($request_code,explode(',',$schedule['country_codes']))){
                    $return = &$return_matching;
                } else {
                    continue;
                }
            } else {
                $return = &$return_default;
            }
            $return['expire'] = $this->convertDateFromMysql($schedule['finish_at']);
            $return['name'] = $schedule['name'];
            $return['id'] = $schedule['id'];
            $data = JSON_decode($schedule['data'],true);
            $campaigns = $schedule['campaigns'];
            foreach($campaigns as $campaign){
                $templates =  Campaign::find($campaign['id'])->templates()->get()->toArray();
                foreach($templates as $template){
                    $html = base64_decode($template['html']);
                    $javascript = base64_decode($template['javascript']);
                    $template_data = $data['template_'.$template['id']];
                    foreach($template_data as $name=>$value){
                        $html = str_replace('{{'.$name.'}}',$value,$html);
                        $javascript = str_replace('{{'.$name.'}}',$value,$javascript);
                    }
                    $return['template_'.$template['id']]['target'] = $template['target'];
                    $return['template_'.$template['id']]['inject'] = $template['inject'];
                    $return['template_'.$template['id']]['html'] = base64_encode($html);
                    $return['template_'.$template['id']]['javascript'] = base64_encode($javascript);
                }
            }
        }
        if (isset($return_matching['name'])){
            return $return_matching;
        }
        else
            return $return_default;
    }

    public function getCurrentSchedule($site_id){
        $request_code = null;
            foreach(getallheaders() as $key=>$value){
                if ($key == 'Cf-Ipcountry' && $request_code == null){
                    $request_code = $value;
                }
                if ($key == 'Preview-Ipcountry'){
                    $request_code = $value;
                }
            }
        if ($request_code == null)
            $request_code = 'any';
        if (Cache::has("schedule_".$site_id."_".$request_code)){
            return Cache::get("schedule_".$site_id."_".$request_code);
        } else {
            $schedule = $this->getSchedulesForTime($site_id,'now');
            if ($schedule)
                Cache::tags(['site_'.$site_id])->put("schedule_".$site_id."_".$request_code,$schedule,Carbon\Carbon::createFromFormat('d/m/Y H:i',$schedule['expire']));
            return $schedule;
        }
    }

    public function getCurrentScheduleJson($site_id){
        $out = Array('data'=>json_encode($this->getCurrentSchedule($site_id)));
        return view('api/response')->with($out);
    }

    public function getLiveSchedule($site_id,$time){
        $team = $this->checkTeam($site_id);
        if ($team == null)
          return $this->error("Access Control Error");
        $time = Carbon\Carbon::createFromFormat('d-m-Y H:i',$time);
        $time = $time->format('d/m/Y H:i');
        return $this->getSchedulesForTime($site_id,$time);
    }

    public function getJsFile($site_id){
        $out = Array('site'=>$_SERVER['SERVER_NAME'],'data'=>json_encode($this->getCurrentSchedule($site_id)));
        return view('loader')->with($out);
    }

    public function getCssFile($site_id){
        $schedule = $this->getCurrentSchedule($site_id);
        $outString = "";
        foreach($schedule as $template){
            if (isset($template['target']))
                $outString .= $template['target'].", ";
        }
        $outString = rtrim($outString, ', ');
        $out = Array('data'=>$outString);
        return response()->view('loaderCss',$out)->header('Content-Type', 'text/css');
    }

    public function uploadImage($site_id){
        $team = $this->checkTeam($site_id);
        if ($team == null)
          return $this->error("Access Control Error");
        $image = Request::file('image');
  		$input = array('image' => $image);
  		$rules = array(
  			'image' => 'image'
  		);
  		$validator = Validator::make($input, $rules);
        if ( $validator->fails() )
		{
			return Response::json(['success' => false, 'errors' => $validator->getMessageBag()->toArray()]);

		} else {
            $imageFileName = time() . '.' . $image->getClientOriginalExtension();
            $filePath =  $site_id."_".$imageFileName;
            $s3 = \Storage::disk('s3');
            $s3->put($filePath, file_get_contents($image), 'public');
            return Response::json(['success' => true, 'filename' => 'http://images.bannr.io/'.$filePath, 'target' => request('file_target')]);
        }
    }
}
