<?php
/*
  Plugin Name: MihanWP Video Speed
  Plugin URI:  https://mihanwp.com/
  Author:      MihanWP
  Author URI:  https://mihanwp.com
  Version:     1.0
  Description: WordPress plugin for change video speed
  Text Domain: wp-video-speed
  Domain Path: /languages
*/

defined('ABSPATH') or die;

function mihanwp_video_speed_load_assets(){
    $version = 1.0;
    wp_enqueue_script('mwspeedjs', plugin_dir_url(__FILE__). 'app.js' , ['jquery'], $version, true);
    wp_localize_script('mwspeedjs', 'mwspeed', ['mwspeedimg' => plugin_dir_url(__FILE__)]);
    wp_enqueue_style( 'mwspeedcss', plugin_dir_url(__FILE__) . 'app.css',[],$version);
}

add_action('wp_enqueue_scripts','mihanwp_video_speed_load_assets');