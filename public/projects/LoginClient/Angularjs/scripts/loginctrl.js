
angular.module('mapGameApp')
.controller('LoginController',['$scope', 'sessionService', function ($scope, sessionService) {
	$scope.credentials = sessionService.credentials;
	
	$scope.login = function login(){
		sessionService.login();
	}
}]);