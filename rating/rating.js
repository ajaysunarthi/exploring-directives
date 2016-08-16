angular.module('rating', [])
    .directive('starRating', function() {
        return {
            restrict: 'E', // trigger on Element e.g. <star-rating></star-rating>
            templateUrl: 'rating.html', // template location
            scope: { // isolate scope variable mappings
                rating: '=', // two-way data-binding to the expression specified by `rating` attribute
                //    you could also use '=ngModel' instead to get the component to support validation
                maxRating: '=', // two-way data-binding to the expression specified by `max-rating` attribute
                rated: '&' // expose function that will evaluate expression specified by `rated` attribute
            },
            link: function(scope, iElement, iAttrs) {

                var ratingValues = scope.ratingValues = [];
                var maxRating;
                // watch maxRating value changes and reinitialize the internal array
                scope.$watch('maxRating', function maxRatingWatchAction(newMaxRating) {
                    maxRating = parseInt(newMaxRating, 10) || 5;

                    ratingValues.length = 0;
                    for (var i = 1; i <= maxRating; i++) {
                        ratingValues.push(i);
                    }
                });

                scope.isFilled = function(ratingValue) {
                    return (scope.highlightedRating || scope.rating) >= ratingValue;
                };

                scope.enter = function(ratingValue) {
                	
                    scope.highlightedRating = ratingValue;
                };

                scope.leave = function() {
                    scope.highlightedRating = undefined;
                };

                scope.select = function(ratingValue) {
                    scope.rated({ $new: ratingValue, $old: scope.rating });
                    scope.rating = ratingValue;
                };

            }
        }
    });
