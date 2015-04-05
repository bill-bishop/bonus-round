angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {

})

.controller('GamesCtrl', function($scope, Games, BASE_URL) {
	$scope.baseUrl = BASE_URL;
	Games.getComingSoon().then(function (gamesList) {
		$scope.comingSoon = gamesList;
	});
})

.controller('TabCtrl', function($scope) {

});
