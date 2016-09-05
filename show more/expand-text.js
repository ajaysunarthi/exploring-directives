angular.module("answer").directive('expendText', function() {

    function bounds(text, len) {
        return { truncated: text.substr(0, len), expended: text.substr(len) }
    }

    return {
    	scope:{
    		showMoreString: "@showMoreString",
			showLessString: "@showLessString",
			text: "=text"
    	},
        restrict: 'A',
        templateUrl: 'expend-text.html',
        link: function(scope, elm, attrs, controller) {
            var maxLength = attrs.maxLength || 300;
            scope.showMoreString = scope.showMoreString || 'show More';
            scope.showLessString = scope.showLessString || 'show Less';
            if (scope.text.length > maxLength) {

                scope.truncated = true;
                var splitLength = bounds(scope.text, maxLength);
                scope.text = splitLength.truncated;
                scope.expendedText = splitLength.expended;
            }
          
        }
    };
});
