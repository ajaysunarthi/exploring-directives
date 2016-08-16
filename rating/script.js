angular.module('App', ['rating']);

angular.module('App').controller('mainCtrl', mainCtrl);

function mainCtrl() {
	var vm = this;
  vm.maxValue = 5;
  vm.myValue = 2;
}