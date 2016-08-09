(function() {

  angular
    .module("MovieAPIClientSide.list.list-item-directive", [])
    .directive('item', item);

    ListItemController.$inject = ['$scope', 'ListService'];

    function item() {
      var directive = {
        restrict: 'E',
        templateUrl: '/views/list-item.html',
        scope: {
          listItem: '='
        },
        controller: ListItemController,
        controllerAs: 'ListItemController'
      };
      return directive;
    }

    function ListItemController($scope, ListService) {
      $scope.hideForm = true;

      $scope.showForm = function() {
        $scope.hideForm = false;
      };

      $scope.deleteItem = function(id) {
        ListService.deleteListItem(id);
      };

      $scope.editItem = function(listItem) {
        ListService.editListItem(listItem);
        $scope.hideForm = true;
      };
    }

})();
