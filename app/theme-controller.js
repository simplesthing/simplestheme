(function (window, angular, undefined) {
	function AppController () {
		var model = this;
    model.bgStyle = 'background:#000 url(\'wp-content/themes/simplestheme/images/hero/l7m-20.jpg\') no-repeat center 60px ; background-size: 100% 73% ;'
		// model.bgStyle = 'background:url(\'wp-content/themes/simplestheme/images/hero/l7m-'+Math.floor(Math.random() * 93)+'.jpg\') no-repeat center center; background-size: cover;';
	};
	angular.module('simplestheme')
	.controller('AppController', AppController)
})(window, window.angular);
