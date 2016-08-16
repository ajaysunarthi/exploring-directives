angular.module('App', ['pagination']);

angular.module('App').controller('mainCtrl', mainCtrl);

function mainCtrl() {
    var vm = this;
    vm.currentPage = 3;
    vm.items = 100;
    vm.itemsPerPage = 8;
}
