<!DOCTYPE html>
<html lang="en" ng-app="simplestheme">
<head>
	<meta charset="UTF-8">
	<meta name="fragment" content="!">
	<title><?php bloginfo( 'name' ); ?> </title>
	<link href='http://fonts.googleapis.com/css?family=Sansita+One' rel='stylesheet' type='text/css'>
	<!-- possible font for abbyleu -->
	<!-- <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'> -->
	<link href='http://fonts.googleapis.com/css?family=Lora|Open+Sans:700,600,800,400' rel='stylesheet' type='text/css'>
	<?php wp_head(); ?>
	<!-- TODO: add in devmode only gulp-->
	<script type="text/javascript">document.write('<script src="//localhost:35729/livereload.js?snipver=1" type="text/javascript"><\/script>')</script>
	<!-- inject:js -->
  	<script src="wp-content/themes/simplestheme/vendor/angular-ui-router.js"></script>
  	<script src="wp-content/themes/simplestheme/vendor/lodash.js"></script>
  	<script src="wp-content/themes/simplestheme/vendor/ui-bootstrap-tpls.js"></script>
  	<script src="wp-content/themes/simplestheme/app/filters/strip-html-tags.js"></script>
  	<script src="wp-content/themes/simplestheme/app/theme/nav/nav-controller.js"></script>
  	<script src="wp-content/themes/simplestheme/app/app.js"></script>
  	<!-- endinject -->
</head>
<body>

	<!-- 	<div class="container-fluid">
		<div class="row">
			<p class="logo"><a href="/"><?php bloginfo( 'name' ); ?> </a></p>
		</div>
		<main class="row" ui-view="main">
			
		</main>
		<aside class="row" ui-view="widget1"></aside>
		<footer class="row">
			<a href="<?php get_stylesheet_directory_uri() ?>/about">About</a>
		</footer>
	</div> -->
	<p class="logo"><a href="/"><?php bloginfo( 'name' ); ?></p>
</body>
</html>
