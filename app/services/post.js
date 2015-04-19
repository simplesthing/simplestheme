(function (window, angular, undefined) {
	angular.module('simplestheme')
	.factory('postModel', function($http){
		return {
			get: function(post){
				return $http.get('/api/get_post/?slug=' + post);
			}
		}
	})
})(window, window.angular); 