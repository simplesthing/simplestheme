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

				}
			}
		})
    .state('archive', {
      url: '/archive',
      views: {
        main: {
          templateUrl: 'wp-content/themes/simplestheme/app/theme/archive/index.html',
          controller: 'ArchiveController',
          controllerAs: 'arch'
        }
      }
    })
		.state('post', {
			url: '/:slug',
			views: {
				'main' : {
					templateUrl: 'wp-content/themes/simplestheme/app/theme/post/index.html',
					controller: 'PostController',
					controllerAs: 'post'
				}
			}
		})
		;

		// $locationProvider.html5Mode({enabled: true, requireBase: false});
}])
})(window, window.angular);
