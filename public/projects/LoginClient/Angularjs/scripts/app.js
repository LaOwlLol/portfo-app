angular.module('mapGameApp', ['ngRoute']);

angular.module('mapGameApp').config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/MapGame',
		{redirectTo: '/eula'}).
	when('/eula', {
		templateUrl: 'eula.html',
		controller: 'EulaController'
	}).
	when('/login', {
		templateUrl: 'login.html',
		controller: 'LoginController'
	}).
	when('/home', {
		templateUrl: 'home.html',
		controller: 'HomeController'
	}).
	otherwise({redirectTo: '/MapGame'});
}]);