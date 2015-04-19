(function (window, angular, undefined) {
	function HomeController ($http, PostsModel) {
		var model = this;
		
		model.hero = {
			head: 'Ava Collins',
			tagline: 'The beautiful art that is displayed behind this text is the work of Brazilian street artist L7M.'
		};

		PostsModel.get().then(function(res){
			model.posts = res.data.posts;
		});
	};

	angular.module('simplestheme')
	.controller('HomeController', HomeController)
})(window, window.angular); 