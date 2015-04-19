(function (window, angular, undefined) {
	function AppController () {
		var model = this;
		model.bgStyle = 'background:url(\'wp-content/themes/simplestheme/images/hero/l7m-'+Math.floor(Math.random() * 93)+'.jpg\') no-repeat center center; background-size: cover;';
	};
	angular.module('simplestheme')
	.controller('AppController', AppController)
})(window, window.angular); 