angular.module('typeahead').
directive('typer', function($timeout) {
    // Runs during compile
    return {
        scope: {
            items: '=',
            prompt: '@',
            title: '@',
            subtitle: '@',
            model: '=',
            onSelect: '&'
        },
        restrict: 'AE',
        templateUrl: 'template.html',
        link: function(scope, iElm, iAttrs) {
            scope.handleSelection = function(selectedItem) {
                scope.model = selectedItem;
                scope.current = 0;
                scope.selected = true;
                $timeout(function() {
                    scope.onSelect();
                }, 200);
            };
            scope.current = 0;
            scope.selected = true;
            scope.isCurrent = function(index) {
                return scope.current == index;
            };
            scope.setCurrent = function(index) {
                scope.current = index;
            };
        }
    };
});
