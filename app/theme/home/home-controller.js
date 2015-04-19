(function (window, angular, undefined) {
	function HomeController ($http, postsModel) {
		var model = this;
		postsModel.get().then(function(res){
			model.posts = res.data.posts;
		});
	};

	angular.module('simplestheme')
	.controller('HomeController', HomeController)
})(window, window.angular); 