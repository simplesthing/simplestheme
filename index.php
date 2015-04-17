<!DOCTYPE html>
<html lang="en" ng-app="simplestheme">
<head>
	<meta charset="UTF-8">
	<meta name="fragment" content="!">
	<title><?php bloginfo( 'name' ); ?> </title>
	<?php wp_head(); ?>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:700,600,800,400' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Lora|Open+Sans:700,600,800,400' rel='stylesheet' type='text/css'>
	<!-- TODO make this devmode only -->
	<script type="text/javascript">document.write('<script src="//localhost:35729/livereload.js?snipver=1" type="text/javascript"><\/script>')</script>
</head>
<body>
	<div class="container">
		<header>
			<div class="logo"><a href="/"><?php bloginfo( 'name' ); ?> </a></div>
			<nav>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/">Archive</a></li>
				</ul>
			</nav>
		</header>
		<main ui-view="main"></main>
		<aside ui-view="widget1"></aside>
		<footer><a href="<?php get_stylesheet_directory_uri() ?>/about">About</a></footer>
	</div>	


</body>
</html>
