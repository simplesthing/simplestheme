(function(window, angular, undefined){
  'use strict'

	function ArchiveController ($log, $http, PostsModel){
		var model = this;

    model._posts = [];

    model.nextPage = function(){
      model.getPosts(model.currentPage + 1);
    }

    model.getPosts = function(page){
      var config = {};
      config.query = 'cat=3&page=' + page;


      model.spinnerPromise = PostsModel.get(config).then(function(response){
        angular.extend(model, response.data);
        // merges existing posts list with more posts when retrieved
        model._posts = _.union(model._posts, response.data.posts);
        var page = parseInt(response.data.query.page);
        model.currentPage = page > 0 ? page : 1;
      });
    }

    model.getPosts();


    $log.debug('ArchiveController', model);
	};

  ArchiveController.$inject = ['$log', '$http', 'PostsModel'];

  angular.module('simplestheme')
  .controller('ArchiveController', ArchiveController);

})(window, window.angular)



