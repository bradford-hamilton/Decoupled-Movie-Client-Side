(function() {

  angular
    .module('MovieAPIClientSide.login.login-service', [])
    .service('LoginService', LoginService);

    LoginService.$inject = ['$http', '$location'];

    function LoginService($http, $location) {
      var user = {};

      return {
        loginUser: loginUser,
        getToken: getToken,
        getUserId: getUserId
      };

      function getToken() {
        return user.token;
      }

      function _setUserData(data) {
        user = data;
      }

      function getUserId() {
        return user.userId;
      }

      function loginUser(username, password) {
        $http({
          method: 'POST',
          params: {
            username: username,
            password: password
          },
          // url: 'http://cors-anywhere.herokuapp.com/http://movie-place.herokuapp.com/auth/login'
          url: 'http://localhost:3000/auth/login'
        })
        .then(function(response) {
          console.log(response.data);
          _setUserData(response.data);
          $location.path('/list');
        }, function(err) {
          console.log(err);
        });
      }
    }

})();
