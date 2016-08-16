angular.module('pagination', [])
    .directive('paginationDirective', function() {
        return {
            restrict: 'E',
            templateUrl: 'pagination.html',
            scope: {
                selectedPage: '=',
                collectionSize: '=',
                itemsPerPage: '='
            },
            link: function(scope, iElement, iAttrs) {

                function updatePagesModel() {
                    var pageCount = Math.ceil(scope.collectionSize / (scope.itemsPerPage || 10));
                    scope.pageNumbers.length = 0;
                    for (var i = 1; i <= pageCount; i++) {
                        scope.pageNumbers.push(i);
                    }
                    scope.selectPage(scope.selectedPage);
                }

                scope.pageNumbers = [];

                scope.hasPrevious = function() {
                    return scope.selectedPage > 1;
                };

                scope.hasNext = function() {
                    return scope.selectedPage < scope.pageNumbers.length;
                };

                scope.selectPage = function(pageNumber) {
                    scope.selectedPage = Math.max(Math.min(pageNumber, scope.pageNumbers.length), 1);
                };

                scope.$watch('collectionSize', updatePagesModel);
                scope.$watch('itemsPerPage', updatePagesModel);
                scope.$watch('selectedPage', scope.selectPage);
            }
        }
    });
