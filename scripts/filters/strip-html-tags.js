
(function(window, angular, undefined){
	angular.module('htmlFilters', [])
	/**
 	* Strip HTML tags from a string. Used when displaying content meta tags.
 	* @returns {Function}
 	*/
	.filter('striphtmltags', function(){
		return function(text) {
	    	return String(text).replace(/<[^>]+>/gm, '');
    	};
	})
	.filter('decodeHtmlCodes', function() {
        /**
         * Convert HTML entities which are encoded as decimals to their equivalent character
         */
        return function(input) {
            if (!input) {
                return "";
            }
            return input.replace(/&#(\d+);/g, function (m, n) {
                return String.fromCharCode(n);
            });
        };
    });
})(window, window.angular)
