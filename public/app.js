(function() {
  angular
    .module("MovieAPIClientSide", ['ui.router', "MovieAPIClientSide.signup", "MovieAPIClientSide.login"])

    .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html'
        });
        $locationProvider.html5Mode(true);
      }]);
})();
