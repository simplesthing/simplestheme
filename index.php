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
  	<script src="wp-content/themes/simplestheme/vendor/jquery.js"></script>
  	<script src="wp-content/themes/simplestheme/vendor/angular-ui-router.js"></script>
  	<script src="wp-content/themes/simplestheme/vendor/bootstrap.js"></script>
  	<script src="wp-content/themes/simplestheme/vendor/lodash.js"></script>
  	<script src="wp-content/themes/simplestheme/vendor/ui-bootstrap-tpls.js"></script>
  	<script src="wp-content/themes/simplestheme/app/app.js"></script>
  	<script src="wp-content/themes/simplestheme/app/filters/strip-html-tags.js"></script>
  	<script src="wp-content/themes/simplestheme/app/theme/nav/nav-controller.js"></script>
  	<script src="wp-content/themes/simplestheme/app/theme/nav/nav-model.js"></script>
  	<script src="wp-content/themes/simplestheme/app/module-template.js"></script>
  	<!-- endinject -->
</head>
<body>
	<div id="simplestheme">
		<div class="row">

			<header>
				<nav class="navbar navbar-default">
				  <div class="container-fluid">
				    <!-- Brand and toggle get grouped for better mobile display -->
				    <div class="navbar-header">
				      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				        <span class="sr-only">Toggle navigation</span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				      </button>
				      <a class="navbar-brand logo" href="/">&nbsp;simplesthing</a>
				    </div>
				    <!-- Collect the nav links, forms, and other content for toggling -->
				    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <ul class="nav navbar-nav navbar-right">
				        <li><a href="/category/web-development/">Archives</a></li>
				      </ul>
				    </div><!-- /.navbar-collapse -->
				  </div><!-- /.container-fluid -->
				</nav>

				<div class="one-col">
					<div class="row">
						<div class="col center">
							<h1>HOME</h1>
						</div>
					</div>
				</div>

			</header>

			<div ui-view="main"></div>
			
			<aside ui-view="widget1"></aside>
			
			<footer>
				<a href="<?php get_stylesheet_directory_uri() ?>/about">About</a>
			</footer>
		</div>
	</div>
</body>
</html>
