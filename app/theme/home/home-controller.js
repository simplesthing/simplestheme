(function (window, angular, undefined) {
  'use strict'

  function HomeController ($log, $http, PostsModel) {
    var model = this;

    model._posts = [];

    // model.hero = {
    //   head: 'Ava Collins'
    // };

    model.nextPage = function(){
      model.getPosts(model.currentPage + 1);
    }

    model.getPosts = function(page){
      model.spinnerPromise = PostsModel.get(page).then(function(response){
        angular.extend(model, response.data);
        // merges existing posts list with more posts when retrieved
        model._posts = _.union(model._posts, response.data.posts);
        var page = parseInt(response.data.query.page);
        model.currentPage = page > 0 ? page : 1;
      });
    }

    model.getPosts();

    $log.debug('HomeController', model);

  }

  angular.module('simplestheme')
  .controller('HomeController', HomeController);

})(window, window.angular);
