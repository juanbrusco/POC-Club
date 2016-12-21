angular.module('descuentos.controller', [])
  .controller('DescuentosCtrl', function($scope,$ionicPopup,Descuentos, $ionicTabsDelegate) {
    $scope.dDescuentos = [];
    Descuentos.destacados().then(function(data){
      $scope.dDestacados = data
    });

    $scope.loadMoreD =function() {
      Descuentos.loadMoreD().then(function(data){
        [].push.apply($scope.dDescuentos, data);
        Descuentos.incrementCount();
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    };

    getDescuento= function(descuentoId) {
      for (var i = 0; i < $scope.dDestacados.length; i++) {
        if ($scope.dDestacados[i].id === parseInt(descuentoId)) {
          return $scope.dDestacados[i];
        }
      }
      for (var j = 0; j < $scope.dDescuentos.length; j++) {
        if ($scope.dDescuentos[j].id === parseInt(descuentoId)) {
          return $scope.dDescuentos[j];
        }
      }
      return null;
    },

    $scope.getDetailDescuento = function (id) {
      $ionicTabsDelegate.showBar(false);
      $state.go('tab.descuentos-detail', {'descuentoId': id});
    };
  });
