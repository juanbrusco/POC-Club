angular.module('premiosDetail.controller', [])
  .controller('PremiosDetailCtrl', function($scope, $stateParams, Premios, $ionicLoading) {

    $ionicLoading.show({
      template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Cargando...'
    });

    Premios.getPremioDetail($stateParams.premioId).then(function(data){
      $scope.premioDetail = data;
      $ionicLoading.hide();
    });
    

  })

