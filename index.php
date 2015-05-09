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
  	<script src="wp-content/themes/simplestheme/vendor/angular-animate.js"></script>
  	<script src="wp-content/themes/simplestheme/vendor/angular-busy.js"></script>
  	<script src="wp-content/themes/simplestheme/vendor/angular-ui-router.js"></script>
  	<script src="wp-content/themes/simplestheme/vendor/bootstrap.js"></script>
  	<script src="wp-content/themes/simplestheme/vendor/flowtype.js"></script>
  	<script src="wp-content/themes/simplestheme/vendor/lodash.js"></script>
  	<script src="wp-content/themes/simplestheme/vendor/ui-bootstrap-tpls.js"></script>
  	<script src="wp-content/themes/simplestheme/app/app.js"></script>
  	<script src="wp-content/themes/simplestheme/app/filters/date.js"></script>
  	<script src="wp-content/themes/simplestheme/app/filters/strip-html-tags.js"></script>
  	<script src="wp-content/themes/simplestheme/app/services/category.js"></script>
  	<script src="wp-content/themes/simplestheme/app/services/post.js"></script>
  	<script src="wp-content/themes/simplestheme/app/services/posts.js"></script>
  	<script src="wp-content/themes/simplestheme/app/theme/category/category-controller.js"></script>
  	<script src="wp-content/themes/simplestheme/app/theme/home/home-controller.js"></script>
  	<script src="wp-content/themes/simplestheme/app/theme/post/post-controller.js"></script>
  	<script src="wp-content/themes/simplestheme/app/theme-controller.js"></script>
  	<!-- endinject -->
<body ng-controller="AppController as theme">
	<header ng-attr-style="{{theme.bgStyle}}">
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
		      <a class="navbar-brand logo" ui-sref="home"><?php bloginfo( 'name' ); ?></a>
		    </div>
		    <!-- Collect the nav links, forms, and other content for toggling -->
		    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul class="nav navbar-nav navbar-right">
  		      	<li class="social-icon"><a href="//www.linkedin.com/in/simplesthing" target="_blank"><i class="fa fa-linkedin-square" target="_blank"></i></a></li>
		      	<li class="social-icon"><a href="//twitter.com/simplesthing" target="_blank"><i class="fa fa-twitter-square" target="_blank"></i></a></li>
		      	<li class="social-icon"><a href="//github.com/simplesthing" target="_blank"><i class="octicon octicon-mark-github"></i></a></li>
		      	<!-- <li class="social-icon"><a href="//gist.github.com/simplesthing" target="_blank"><i class="octicon octicon-octoface"></i></a></li> -->
		      	<!-- <li class="social-icon"><a href="//simplesthing.github.io/" target="_blank"><i class="octicon octicon-person"></i></a></li> -->
		        <!-- <li><a href="/category/web-development/">Archives</a></li> -->
		      </ul>
		    </div><!-- /.navbar-collapse -->
		  </div><!-- /.container-fluid -->
		</nav>
		<div ui-view="hero" id="hero"></div>
	</header>

	<main ui-view="main" id="main"></main>

</body>
</html>
