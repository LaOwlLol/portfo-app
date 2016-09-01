angular.module('PortfolioApp', ['ngRoute'])

angular.module('PortfolioApp').controller('PortCtrl', ['$scope', function($scope) {
	
}])

angular.module('PortfolioApp').service('APIServ', ['$http', function($http) {
	this.getAPI = function(apiReq ,success, fail) {
		return $http.get(apiReq).then(function(response) {
			success(response)
		}, function(response) {
			fail(response)
		})
	}
}])

