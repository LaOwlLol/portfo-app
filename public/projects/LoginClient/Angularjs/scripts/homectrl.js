angular.module('mapGameApp')
.controller('HomeController',['$scope', 'sessionService', function ($scope, sessionService) {
	$scope.credentials = sessionService.credentials;
	
	$scope.logout = function logout(){
		sessionService.logout();
	}
}]);