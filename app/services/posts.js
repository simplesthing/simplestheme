(function (window, angular, undefined) {
	angular.module('simplestheme')
	.service('PostsModel', function($http){
		return {
			get: function(){
				return $http.get('/api/get_posts', {cache: true});
			}
		}
	})
})(window, window.angular); 