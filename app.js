(function() {
  'use strict';
  angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope',$filter];
  function LunchCheckController ($scope, $filter){
    $scope.menu = "";
    $scope.checking_and_printing = function (){
      if($scope.menu == "") {
          $scope.message  = "Please Enter Data First....";
          return;
      }
      var values_count  = $scope.menu.split(",").length;
      if (values_count < 4) {
        $scope.message  = " Let's Enjoy....";
      }
      else {
        $scope.message  = " It's too much.....";
      }
    }
  }
})();
