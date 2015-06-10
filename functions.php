<?php

function my_scripts() {

	wp_enqueue_style('main',
		get_stylesheet_directory_uri() . '/css/styles.css'
	);

	wp_enqueue_style('fontawesome',
		get_stylesheet_directory_uri() . '/bower_components/fontawesome/css/font-awesome.css'
	);

	wp_enqueue_style('octicons',
		get_stylesheet_directory_uri() . '/bower_components/octicons/octicons/octicons.css'
	);


	wp_enqueue_script(
		'angularjs',
		get_stylesheet_directory_uri() . '/bower_components/angular/angular.min.js'
	);

}

add_action( 'wp_enqueue_scripts', 'my_scripts' );

show_admin_bar( false );



function register_my_menu() {
  register_nav_menu('header-menu',__( 'Header Menu' ));
}
add_action( 'init', 'register_my_menu' );




function custom_controllers( $controllers ) {
  // JSON API will look for classes based on the names given here
  // and following the format JSON_API_[name]_Controller
  $controllers[] = 'Example';
  return $controllers;
}

function example_controller_path( $default_path ) {
  return get_stylesheet_directory() . '/example.php';
}

add_filter( 'json_api_controllers', 'custom_controllers' );
add_filter( 'json_api_example_controller_path', 'example_controller_path' );


// setup menus controller
function add_menus_controller($controllers) {
  $controllers[] = 'menus';
  return $controllers;
}
add_filter('json_api_controllers', 'add_menus_controller');

function set_menus_controller_path() {
  return TEMPLATEPATH . '/api-controllers/menus.php';
}
add_filter('json_api_menus_controller_path', 'set_menus_controller_path');

?>
