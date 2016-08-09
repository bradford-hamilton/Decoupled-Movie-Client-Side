(function() {
  angular
    .module('MovieAPIClientSide.signup.signup-service', [])
    .service('SignupService', SignupService);

    SignupService.$inject = ['$http', 'LoginService'];

    function SignupService($http, LoginService) {
      return {
        createUser: createUser
      };

      function createUser(username, password) {
        $http({
          method: 'POST',
          params: {
            username: username,
            password: password
          },
          url: 'https://decoupled-movie-app-api.herokuapp.com/auth/signup'
          // url: 'http://localhost:3000/auth/signup'
        })
        .then(function(response) {
          LoginService.loginUser(username, password);
        }, function(err) {
          return err;
        });
      }
    }

})();
