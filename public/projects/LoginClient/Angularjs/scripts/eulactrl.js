angular.module('mapGameApp')
.controller('EulaController', ['$scope', '$location', function($scope, $location) {
	$scope.eulaAccept = function eulaAccept() {
		$location.path('/login');
	}
}]);