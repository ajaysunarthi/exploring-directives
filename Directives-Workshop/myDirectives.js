angular.module('directiveWorkshop').directive('pending', function() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {
            request: '&',
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
            
            iElm.on('click', function() {

                iElm.html('<img src="loading.gif" height="10px">').prop('disabled', true);
                scope.request().then(function() {
                    iElm.text('Submit').prop('disabled', false);
                });

            });
        }
    };
});


angular.module('directiveWorkshop').directive('notify', function() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {
            title: '=',
            body: '=',
            icon: '='
        }, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function(scope, iElm, iAttrs, controller) {
            var Notification = window.Notification || window.mozNotification || window.webkitNotification;
            iElm.on('click', req_perm);
            function req_perm() {
                Notification.requestPermission(function(permission) {
                    if (permission === 'granted') {
                        new Notification(scope.title, { body: scope.body, icon: 'http://icons.iconarchive.com/icons/siancore/halloween/72/Halloween-Hat-icon.png' });
                    }
                });
            }


        }
    };
});
