(function(window, angular, undefined){
	angular.module('dateFilters', [])
	.filter('prettyDate', function(){
		return function(text) {
            var dateObj, months;
            dateObj = new Date(text);
            months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ];
            return months[dateObj.getMonth()] +', ' + dateObj.getDate() +' ' + dateObj.getFullYear();
    	};
	})
})(window, window.angular)
