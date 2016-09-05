angular.module('typeahead')
    .factory('dataFactory', dataFactory);

dataFactory.$inject = ['$http'];

function dataFactory($http) {
    return {
        get: function(url) {
            return $http.get(url).then(function(response) {
                return response.data;
            })
        }
    }
}
