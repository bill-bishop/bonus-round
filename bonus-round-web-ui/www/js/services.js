angular.module('starter.services', [])

.factory('Games', function($http) {
  return {
    getGames: function () {
      return $http.get('content/games/games_list.json').then(function (response) {
        return response.data.games;
      });
    }
  }
});
