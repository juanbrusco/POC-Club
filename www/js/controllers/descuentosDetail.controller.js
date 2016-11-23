angular.module('descuentosDetail.controller', [])
  .controller('DescuentosDetailCtrl', function($scope, $stateParams, Descuentos) {
    $scope.descuento = Descuentos.get($stateParams.descuentosId);
  })
