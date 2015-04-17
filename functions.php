<?php 

function my_scripts() {

	wp_enqueue_style('main', 
		get_stylesheet_directory_uri() . '/css/styles.css'
	);

	wp_enqueue_script(
		'lodash',
		get_stylesheet_directory_uri() . '/bower_components/lodash/lodash.js'
	);
	
	wp_enqueue_script(
		'angularjs',
		get_stylesheet_directory_uri() . '/bower_components/angular/angular.min.js'
	);

	wp_enqueue_script(
		'angularjs-route',
		get_stylesheet_directory_uri() . '/bower_components/angular-ui-router/release/angular-ui-router.js'
	);

	wp_enqueue_script(
		'simplestheme',
		get_stylesheet_directory_uri() . '/scripts/app/simplestheme.js'
	);

	wp_enqueue_script(
		'htmlFilters',
		get_stylesheet_directory_uri() . '/scripts/filters/strip-html-tags.js'
	);
}

add_action( 'wp_enqueue_scripts', 'my_scripts' );

?>