<?php

namespace App\Http\Controllers;

use Redis;
use App\Http\Requests;
use Illuminate\Http\Request;


class ProxyController extends Controller
{

   protected function proxy_curl($url){
       $options = array(
        CURLOPT_RETURNTRANSFER => true,   // return web page
        CURLOPT_HEADER         => false,  // don't return headers
        CURLOPT_FOLLOWLOCATION => true,   // follow redirects
        CURLOPT_MAXREDIRS      => 10,     // stop after 10 redirects
        CURLOPT_ENCODING       => "",     // handle compressed
        CURLOPT_USERAGENT      => "bannr.io", // name of client
        CURLOPT_AUTOREFERER    => true,   // set referrer on redirect
        CURLOPT_CONNECTTIMEOUT => 120,    // time-out on connect
        CURLOPT_TIMEOUT        => 120,    // time-out on response
    );
    $ch = curl_init($url);
    curl_setopt_array($ch, $options);
    $content  = curl_exec($ch);
    curl_close($ch);
    return $content;
   }


    public function index($site_id)
    {
        $proxy_url = Redis::hget('routes',$site_id);
        header('X-Frame-Options: ALLOW');
        if (stristr(request()->path,'.css'))
            header('Content-Type: text/css');
        $response = $this->proxy_curl($proxy_url."/".request()->path);
        $response = str_replace("</body>",
        "<script src='https://admin.bannr.io/js/inject.js'></script>
         <link rel='stylesheet' href='https://admin.bannr.io/css/inject.css'></link>
         </body>
        ",$response);

        $double_replacement = "<a href='https://$site_id.proxy.bannr.io";
        $single_replacement = "<a href=\"https://$site_id.proxy.bannr.io";

        $response = str_replace('<a href="'.$proxy_url,$single_replacement,$response);
        $response = str_replace("<a href='".$proxy_url,$single_replacement,$response);
        $non_ssl = str_replace('https','http',$proxy_url);
        $response = str_replace('<a href="'.$non_ssl,$double_replacement,$response);
        $response = str_replace("<a href='".$non_ssl,$double_replacement,$response);

        echo $response;
    }

}
