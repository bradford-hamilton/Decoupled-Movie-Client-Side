(function() {
  angular
    .module("MovieAPIClientSide", [
      'ui.router',
      "MovieAPIClientSide.signup",
      "MovieAPIClientSide.login",
      "MovieAPIClientSide.list"
    ])

    .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html'
        })
        .state('list', {
          url: '/list',
          templateUrl: 'views/list.html',
          controller: 'ListController'
        });
        $locationProvider.html5Mode(true);
      }]);
})();
