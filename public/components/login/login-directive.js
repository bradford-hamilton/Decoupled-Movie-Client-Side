(function() {

  angular
    .module("MovieAPIClientSide.login.login-directive", [])
    .directive("login", login);

    function login() {
      var directive = {
        restrict: 'E',
        templateUrl: "views/login.html",
        scope: {},
        controller: LoginController,
        controllerAs: "LoginController"
      };
      return directive;
    }

    LoginController.$inject = ['LoginService'];

    function LoginController(LoginService) {
      LoginController = this;

      LoginController.submit = function(username, password) {
        LoginService.loginUser(username, password);
      };
    }

})();
