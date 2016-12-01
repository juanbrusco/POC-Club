angular.module('descuentos.controller', [])
  .controller('DescuentosCtrl', function($scope,$ionicPopup,Descuentos) {
    $scope.descuentos = [];
    Descuentos.all().then(function(data){
      $scope.destacados = data
    });

    $scope.loadMore =function() {
      Descuentos.loadMore().then(function(data){
        [].push.apply($scope.descuentos, data);
        Descuentos.incrementCount();
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    };

    $scope.$on('$stateChangeSuccess', function() {
      $scope.loadMore();
    });



    // A confirm dialog
    $scope.showConfirm = function(descuentoId) {
      var descuento = Descuentos.getDescuento(descuentoId);
      var confirmPopup = $ionicPopup.confirm({
        title:'Canjear',
        template: descuento.name
      });

      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

  });
