angular
.module('directive.g+signin', [])
.directive('googlePlusSignin', 
	['$window', '$rootScope', 
	function ($window, $rootScope) {
		var ending = /\.apps\.googleusercontent\.com$/;
		return {
			restrict : 'E',
			transclude : true,
			template : '<span></span>',
			replace : true,
			link:,
			
		}
	}]);