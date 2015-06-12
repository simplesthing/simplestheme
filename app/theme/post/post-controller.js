(function (window, angular, undefined) {
	function PostController ($log, $http, $stateParams, $sce, PostModel) {
		var model = this;
    var slug = $stateParams.slug;

    model.hero = {};

		model.getPost = function(slug){
      model.postPromise = PostModel.get(slug).then(function(response){
        angular.extend(model, response.data);
        model.data = response.data;
        model.title = $sce.trustAsHtml( response.data.post.title_plain);
        model.content = $sce.trustAsHtml(response.data.post.content);
        model.ready = true;
      });
    };

    model.getPost(slug);

    $log.debug('PostController', model);
	};

  // Inject directive dependencies
  PostController.$inject = ['$log', '$http', '$stateParams', '$sce', 'PostModel'];

	angular.module('simplestheme')
	.controller('PostController', PostController);

})(window, window.angular);
