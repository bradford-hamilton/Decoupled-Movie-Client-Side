(function() {

  angular
    .module("MovieAPIClientSide.list.list-service", [])
    .service("ListService", ListService);

    ListService.$inject = ["$http", "$q", "LoginService", "$state"];

    function ListService($http, $q, LoginService, $state) {
      return {
        getListItems: getListItems,
        createListItem: createListItem,
        editListItem: editListItem,
        deleteListItem: deleteListItem
      };

      function getListItems() {
        var deferred = $q.defer();

        $http({
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + LoginService.getToken()
          },
          url: 'https://decoupled-movie-app-api.herokuapp.com/api/movies/' + LoginService.getUserId()
          // url: 'http://localhost:3000/api/movies/' + LoginService.getUserId()
        })
        .then(function(response) {
          deferred.resolve(response.data.movies);
        }, function(err) {
          deferred.reject(err);
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
          url: 'https://decoupled-movie-app-api.herokuapp.com/api/movies'
          // url: 'http://localhost:3000/api/movies'
        })
        .then(function(response) {
          deferred.resolve(response.data.movies);
        }, function(err) {
          deferred.reject(err);
        });
        return deferred.promise;
      }

      function editListItem(listItem) {
        var deferred = $q.defer();

        $http({
          method: 'PUT',
          headers: {
            Authorization: 'Bearer ' + LoginService.getToken()
          },
          params: {
            movie_id: listItem.id,
            title: listItem.title,
            description: listItem.description,
            year: listItem.year,
            image_url: listItem.image_url,
            rating: listItem.rating
          },
          url: 'https://decoupled-movie-app-api.herokuapp.com/api/movies/' + listItem.id
          // url: 'http://localhost:3000/api/movies/' + listItem.id
        })
        .then(function(response) {
          deferred.resolve(response.data.movies);
        }, function(err) {
          deferred.reject(err);
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
          url: 'https://decoupled-movie-app-api.herokuapp.com/api/movies/' + id
          // url: 'http://localhost:3000/api/movies/' + id
        })
        .then(function(response) {
          deferred.resolve(response.data.movies);
          $state.reload();
        }, function(err) {
          deferred.reject(err);
        });
        return deferred.promise;
      }
    }

})();
