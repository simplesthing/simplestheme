(function (window, angular, undefined) {
	angular.module('simplestheme')
	.factory('postsModel', function($http){
		return {
			get: function(){
				return $http.get('/api/get_posts');
			}
		}
	})
})(window, window.angular); 