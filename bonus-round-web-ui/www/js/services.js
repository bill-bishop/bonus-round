angular.module('starter.services', [])

.factory('Games', function($http, BASE_URL) {
  return {
    getComingSoon: function () {
      return $http.get(BASE_URL + '/data/games/games_list.json').then(function (response) {
        return response.data.comingSoon.gamesList;
      });
    }
  }
});
