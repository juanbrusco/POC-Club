angular.module('tabs.controller', ['ionic'])
  .controller('TabsCtrl', function($scope, $stateParams,$rootScope,$ionicTabsDelegate,$ionicHistory) {


    $rootScope.isDetalle=true;


    $scope.showBar = function(){
      $ionicHistory.goBack();
      $ionicTabsDelegate.showBar(true);
    };

  })
