(function (window, angular, undefined) {
  'use strict'

  function HomeController ($log, $http, $sce, PostsModel) {
    var model = this;

    model._posts = [];

    model.getPosts = function(){
      var config = {};
      config.query = '?showposts=1';
      model.spinnerPromise = PostsModel.get(config).then(function(response){
        angular.extend(model, response.data);
        model.data = response.data.posts[0];
        model.title = $sce.trustAsHtml( response.data.posts[0].title_plain);
        model.content = $sce.trustAsHtml(response.data.posts[0].content);
      });
    }

    model.getPosts();

    $log.debug('HomeController', model);

  }

  HomeController.$inject = ['$log', '$http', '$sce', 'PostsModel'];

  angular.module('simplestheme')
  .controller('HomeController', HomeController);

})(window, window.angular);
