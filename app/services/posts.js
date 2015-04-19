(function (window, angular, undefined) {
	angular.module('simplestheme')
	.service('PostsModel', function($http){
		return {
			get: function(config){
				// nopaging=true for all
				// fixed cat for now
				return $http.get('/api/get_posts?cat=3&page='+ config, {cache: true});
			}
		}
	})
})(window, window.angular); 