angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {

})

.controller('GamesCtrl', function($scope, Games, BASE_URL) {
	$scope.baseUrl = BASE_URL;
	Games.getGames().then(function (games) {
		$scope.games = games;
	});
})

.controller('TabCtrl', function($scope) {

});
