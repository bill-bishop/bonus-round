angular.module('starter.services', [])

.factory('Games', function($http) {
  return {
    getComingSoon: function () {
      return $http.get('/data/games/games_list.json').then(function (response) {
        return response.data.comingSoon.gamesList;
      });
    }
  }
});
