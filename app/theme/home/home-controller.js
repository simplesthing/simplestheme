(function (window, angular, undefined) {
	function HomeController ($log, $http, PostsModel) {
		var model = this;
		model._posts = [];

		model.hero = {
			head: 'Ava Collins',
			tagline: 'The art behind this text is the work of Brazilian street artist L7M.'
		};

		model.nextPage = function(){
			model.getPosts(model.currentPage + 1);
		}

		model.getPosts = function(page){
			PostsModel.get(page).then(function(res){
				angular.extend(model, res.data);
				model._posts = _.union(model._posts, res.data.posts);
				var query = parseInt(res.data.query.page);
				model.currentPage = query > 0 ? query : 1;
				console.log(model)
			});
		}

		model.getPosts();

		$log.debug('HomeController', model);

	};

	angular.module('simplestheme')
	.controller('HomeController', HomeController)
})(window, window.angular); 