(function() {

  angular
    .module("MovieAPIClientSide")
    .controller("ListController", ListController);

    ListController.$inject = ["$scope", "ListService"];

    function ListController($scope, ListService) {
      _init = function() {
        $scope.hideForm = true;
        _getListItems();
      };

      _getListItems = function() {
        ListService.getListItems()
        .then(function(response) {
          $scope.listData = response;
        });
      };

      $scope.showForm = function() {
        $scope.hideForm = false;
      };

      $scope.createListItem = function(newListItem) {
        ListService.createListItem(newListItem)
        .then(function() {
          _getListItems();
          $scope.hideForm = true;
          $scope.newListItem = '';
        });
      };

      _init();
    }

})();
