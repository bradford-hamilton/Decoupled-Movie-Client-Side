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
      // function to get the JWT token
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
          url: 'https://decoupled-movie-app-api.herokuapp.com/auth/login'
          // url: 'http://localhost:3000/auth/login'
        })
        .then(function(response) {
          _setUserData(response.data);
          $location.path('/list');
        }, function(err) {
          return err;
        });
      }
    }

})();
