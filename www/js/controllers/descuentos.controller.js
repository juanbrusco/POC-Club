angular.module('descuentos.controller', [])
  .controller('DescuentosCtrl', function($scope,$ionicPopup,Descuentos,$state) {
    $scope.dDescuentos = [];
    Descuentos.destacados().then(function(data){
      $scope.dDestacados = data
    });

    $scope.loadMoreD =function() {
      Descuentos.loadMore().then(function(data){
        [].push.apply($scope.dDescuentos, data);
        Descuentos.incrementCount();
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    };

    $scope.$on('$stateChangeSuccess', function() {
      $scope.loadMoreD();
    });

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
    // PopUp custom
    $scope.showPopupD = function(descuentoId) {
      var descuento = getDescuento(descuentoId);
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

    $scope.getDetailDescuento = function (id) {
      $state.go('tab.descuentos-detail', {'descuentoId': id});
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
