(function() {

  angular
    .module("MovieAPIClientSide.signup.signup-directive", [])
    .directive("signup", signup);

    function signup() {
      var directive = {
        restrict: 'E',
        templateUrl: "views/signup.html",
        scope: {},
        controller: SignupController,
        controllerAs: "SignupController"
      };
      return directive;
    }

    SignupController.$inject = ['SignupService'];

    function SignupController(SignupService) {
      this.submit = function(username, password) {
        SignupService.createUser(username, password);
      };
    }

})();
