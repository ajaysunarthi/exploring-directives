angular.module('typeahead', [])
    .controller('mainCtrl', mainCtrl);

mainCtrl.$inject = ['dataFactory'];

function mainCtrl(dataFactory) {
    var vm = this;
    dataFactory.get('data.json').then(function(data) {
        vm.items = data;
    });
    vm.name = '';
    vm.onItemSelected = function() {
        console.log('selected=' + vm.name);
    };
}
