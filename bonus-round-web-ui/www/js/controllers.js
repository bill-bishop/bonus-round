angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('GamesCtrl', function($scope, Games) {
	Games.getGames().then(function (games) {
		$scope.games = games;
	});
})

.controller('SocialCtrl', function($scope) {
	$scope.socialSites = [
		{
			name: "Facebook",
			icon: "ion-social-facebook-outline",
			url: "https://www.facebook.com/BonusRoundPhx"
		},
		{
			name: "Twitter",
			icon: "ion-social-twitter-outline",
			url: "https://twitter.com/The_Bonus_Round"
		},
		{
			name: "Instagram",
			icon: "ion-social-instagram-outline",
			url: "https://instagram.com/the_bonus_round/"
		}
	];
})

.controller('TabCtrl', function($scope) {

});
