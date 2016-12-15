angular.module('premiosDetail.controller', [])
  .controller('PremiosDetailCtrl', function($scope, $stateParams, Premios, $ionicLoading, $rootScope) {

    $ionicLoading.show({
      template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Cargando...'
    });

    Premios.getPremioDetail($stateParams.premioId).then(function(data){
      $scope.premioDetail = data;
      $ionicLoading.hide();
    });

    $rootScope.isDetalle=true;

    $scope.myGoBack = function() {
      $ionicHistory.goBack();
    };

  })

