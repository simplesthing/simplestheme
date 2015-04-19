(function (window, angular, undefined) {
	function HomeController ($log, $http, PostsModel) {
		var model = this;
		
		model.hero = {
			head: 'Ava Collins',
			tagline: 'The art behind this text is the work of Brazilian street artist L7M.'
		};

		PostsModel.get().then(function(res){
			model.posts = res.data.posts;
		});


		$log.debug('HomeController', model);

	};

	angular.module('simplestheme')
	.controller('HomeController', HomeController)
})(window, window.angular); 