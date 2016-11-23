angular.module('descuentos.controller', [])
  .controller('DescuentosCtrl', function($scope, Descuentos) {
    $scope.descuentos = Descuentos.all();
    $scope.remove = function(descuento) {
      Descuentos.remove(descuento);
    };
  });
