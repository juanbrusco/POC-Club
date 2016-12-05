angular.module('descuentos.controller', [])
  .controller('DescuentosCtrl', function($scope,$ionicPopup,Descuentos,$state) {
    $scope.descuentos = [];
    Descuentos.destacados().then(function(data){
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

    // PopUp custom
    $scope.showPopup = function(descuentoId) {
      var descuento = Descuentos.getDescuento(descuentoId);
      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<img ng-src="' + descuento.logoProveedor + '" style="width: 60px; height: 40px;"/>',
        title: 'Canjear Premio',
        subTitle: descuento.name,
        scope: $scope,
        buttons: [
          { text: 'Cancelar',
            type: 'button-light'},
          {
            text: '<b>Canjear</b>',
            type: 'button-positive',
            onTap: function() {
              $state.go('tab.descuentos-detail', {'descuentoId': descuento.id});
            }
          }
        ]
      });
    };

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
