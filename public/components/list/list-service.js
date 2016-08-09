(function() {

  angular
    .module("MovieAPIClientSide.list.list-service", [])
    .service("ListService", ListService);

    ListService.$inject = ["$http", "$q", "LoginService", "$state"];

    function ListService($http, $q, LoginService, $state) {
      return {
        getListItems: getListItems,
        createListItem: createListItem,
        deleteListItem: deleteListItem
      };

      function getListItems() {
        var deferred = $q.defer();

        $http({
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + LoginService.getToken()
          },
          url: 'http://localhost:3000/api/movies/' + LoginService.getUserId()
        })
        .then(function(response) {
          deferred.resolve(response.data.movies);
        }, function(err) {
          console.log(err);
        });
        return deferred.promise;
      }

      function createListItem(newListItem) {
        var deferred = $q.defer();

        $http({
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + LoginService.getToken()
          },
          params: {
            title: newListItem.title,
            description: newListItem.description,
            year: newListItem.year,
            image_url: newListItem.image_url,
            rating: newListItem.rating,
            user_id: LoginService.getUserId()
          },
          url: 'http://localhost:3000/api/movies'
        })
        .then(function(response) {
          deferred.resolve(response.data.movies);
        }, function(err) {
          console.log(err);
        });
        return deferred.promise;
      }

      function deleteListItem(id) {
        var deferred = $q.defer();

        $http({
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer ' + LoginService.getToken()
          },
          params: {
            user_id: LoginService.getUserId(),
            movie_id: id
          },
          url: 'http://localhost:3000/api/movies/' + id
        })
        .then(function(response) {
          deferred.resolve(response.data.movies);
          $state.reload();
        }, function(err) {
          console.log(err);
        });
        return deferred.promise;
      }

    }

})();
