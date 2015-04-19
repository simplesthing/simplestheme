(function (window, angular, undefined) {
	'use strict'

angular.module('simplestheme', [
	'ui.router',
	'htmlFilters'
])
.value('_', window.lodash)
.config(['$stateProvider','$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.when('', '/#');
	$stateProvider
		.state('home', {
			url: '/',
			views: {
				'main' : {
					templateUrl: 'wp-content/themes/simplestheme/app/theme/home/index.html',
					controller: 'HomeController',
					controllerAs: 'home'

				},
				'hero': {
					templateUrl: 'wp-content/themes/simplestheme/app/theme/home/hero.html'
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
					templateUrl: 'wp-content/themes/simplestheme/app/theme/post/hero.html',
					controller: 'PostController',
					controllerAs: 'single'
				}
			}
		});
		// $locationProvider.html5Mode({enabled: true, requireBase: false});
}])
})(window, window.angular); 