/**
 * 
 */
angular.module('mapGameApp')
.factory('sessionService', ['$location', function ($location) {
	credentials = { username:"", password:""};
	
	var login = function () {
		credentials.password="";
		//TODO: fetch entry from login table, compare provided password
		//if true Reroute to home, else error message.
		$location.path('/home');
		logout = 'false';
		return 'true';
	};
	
	var logout = function () {
		$location.path('/login');
		login = 'false'; 
		return 'true';
	};
	
	return{ credentials: credentials,
			login: login,
			logout: logout};
}]);