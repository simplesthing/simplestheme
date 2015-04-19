(function (window, angular, undefined) {
	'use strict'

angular.module('simplestheme', [
	'ui.router'
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
					templateUrl: 'wp-content/themes/simplestheme/app/theme/wpost/index.html',
					controller: 'slug',
					controllerAs: 'slug'
				}
			}
		});
		// $locationProvider.html5Mode({enabled: true, requireBase: false});
}])
.controller('slug', [ '$scope', '$http', '$stateParams', '_',
	function($scope, $http, $stateParams){
		$http.get('/api/get_post/?slug='+ $stateParams.slug).success(function(response){
			console.log(response)
			$scope.post = response.post;
		});
	}]
);
})(window, window.angular); 