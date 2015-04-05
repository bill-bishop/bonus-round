angular.module('starter.services', [])

.factory('Games', function($http, BASE_URL) {
  return {
    getGames: function () {
      return $http.get(BASE_URL + '/data/games/games_list.json').then(function (response) {
        return response.data.games;
      });
    }
  }
});
