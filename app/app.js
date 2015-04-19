(function () {
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
					controllerAs: 'model'
				}
			}
		})
		.state('post', {
			url: '/:slug',
			views: {
				'main' : {
					templateUrl: 'wp-content/themes/simplestheme/scripts/app/post/index.html',
					controller: 'slug',
					controllerAs: 'slug'
				}
			}
		});
		// $locationProvider.html5Mode({enabled: true, requireBase: false});
}])
.controller('HomeController', function($scope, $http) {
	console.log('home');
	$scope.posts={};
	$http.get('/api/get_posts').success(function(response){
		$scope.posts = response.posts;
	});
})
.controller('slug', [ '$scope', '$http', '$stateParams', '_',
	function($scope, $http, $stateParams){
		$http.get('/api/get_post/?slug='+ $stateParams.slug).success(function(response){
			console.log(response)
			$scope.post = response.post;
		});
	}]
);
})(); 