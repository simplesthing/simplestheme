<?php 

function my_scripts() {

	wp_enqueue_style('main', 
		get_stylesheet_directory_uri() . '/css/styles.css'
	);
	
	wp_enqueue_script(
		'angularjs',
		get_stylesheet_directory_uri() . '/bower_components/angular/angular.min.js'
	);

}

add_action( 'wp_enqueue_scripts', 'my_scripts' );

show_admin_bar( false );
?>