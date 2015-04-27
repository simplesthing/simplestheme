(function (window, angular, undefined) {
	'use strict'

angular.module('simplestheme', [
	'ui.router',
	'htmlFilters',
	'dateFilters',
  'cgBusy'
])
.value('_', window.lodash)
.config(['$stateProvider','$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.when('', '/home')
	.otherwise('/home');
	$stateProvider
		.state('home', {
			url: '/home',
			views: {
				'main' : {
					templateUrl: 'wp-content/themes/simplestheme/app/theme/home/home.html',
					controller: 'HomeController',
					controllerAs: 'home'

				},
				'hero': {
					templateUrl: 'wp-content/themes/simplestheme/app/theme/hero/hero.html',
					controller: 'HomeController',
					controllerAs: 'ctrl'
				}
			}
		})
		.state('post', {
			url: '/:slug',
			views: {
				'main' : {
					templateUrl: 'wp-content/themes/simplestheme/app/theme/post/index.html',
					controller: 'PostController',
					controllerAs: 'single'
				},
				'hero': {
					templateUrl: 'wp-content/themes/simplestheme/app/theme/hero/hero.html',
					controller: 'PostController',
					controllerAs: 'ctrl'
				}
			}
		})
		.state('category', {
			url: '/:category',
			views: {
				main: {
					templateUrl: 'wp-content/themes/simplestheme/app/theme/category/index.html',
					controller: 'CategoryController',
					controllerAs: 'cat'
				}
			}
		});

		// $locationProvider.html5Mode({enabled: true, requireBase: false});
}])
})(window, window.angular);
