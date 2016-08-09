(function() {

  angular
    .module("MovieAPIClientSide.list.list-item-directive", [])
    .directive('item', item);

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

    ListItemController.$inject = ['$scope', 'ListService'];

    function ListItemController($scope, ListService) {
      $scope.deleteItem = function(id) {
        ListService.deleteListItem(id);
      };

    }

})();
