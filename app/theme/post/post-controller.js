(function (window, angular, undefined) {
	function PostController ($http, $stateParams, postModel) {
		var model = this;
		if(!model.post) {
			postModel.get($stateParams.slug).then(function(res){
			console.log(res)
			model.post = res.data.post;
		});
		}
	};

	angular.module('simplestheme')
	.controller('PostController', PostController)
})(window, window.angular); 