(function (window, angular, undefined) {
	function PostController ($log, $http, $stateParams, PostModel) {
		var model = this;
    var slug = $stateParams.slug;

    model.hero = {};

		model.getPost = function(slug){
      PostModel.get(slug).then(function(response){
        angular.extend(model, response.data);
        model.hero.head = response.data.post.title;
      });
    };

    model.getPost(slug);

    $log.debug('PostController', model);
	};

	angular.module('simplestheme')
	.controller('PostController', PostController);

})(window, window.angular);
