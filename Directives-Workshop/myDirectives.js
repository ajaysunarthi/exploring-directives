angular.module('directiveWorkshop').directive('pending',  function() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {
        	request : '&',
        },
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'EA',
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function(scope, iElm, iAttrs) {
        	console.log(iElm);
        	iElm.on('click',function () {
        	iElm.html('<img src="loading.gif" height="10px">');  
        	});
        }
    };
});
