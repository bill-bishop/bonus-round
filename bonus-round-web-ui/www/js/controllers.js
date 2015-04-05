angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('LeaderboardCtrl', function($scope) {
})

.controller('TabCtrl', function($scope) {
	function createTab(title, tab, onIcon, offIcon) {
		return {			
			title: title,
			tab: tab,
			onIcon: onIcon,
			offIcon: offIcon
		};
	}

	$scope.tabs = [
		createTab('Home', 'home', 'ion-beer', 'ion-ios-game-controller-a'),
		createTab('Get Social', 'social', 'ion-thumbsup', 'ion-thumbsup'),
		createTab('About Us', 'about', 'ion-ios-help', 'ion-ios-help-outline'),
		createTab('High Scores', 'leaderboard', 'ion-trophy', 'ion-trophy')
	];
});
