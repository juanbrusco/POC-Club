angular.module('premiosDetail.controller', [])
  .controller('PremiosDetailCtrl', function($scope, $stateParams, Premios, $ionicLoading,$ionicPlatform, $state) {

    $ionicLoading.show({
      template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Cargando...'
    });

    Premios.getPremioDetail($stateParams.premioId).then(function(data){
      $scope.premioDetail = data;
      $ionicLoading.hide();
    });

    $ionicPlatform.registerBackButtonAction(function() {
      $scope.goBack();
    }, 100);

    $scope.goBack= function(){
      $state.go($stateParams.back, {});
    }

  })

