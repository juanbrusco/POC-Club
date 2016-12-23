angular.module('premiosDetail.controller', ['ionic'])
  .controller('PremiosDetailCtrl', function($scope, $stateParams, Premios, $cordovaGeolocation, $ionicLoading, $cordovaSms, $cordovaSocialSharing,$ionicHistory, $cordovaKeyboard, $location, $ionicPlatform, $ionicTabsDelegate,$state,$ionicPopup) {

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

    $scope.shareAnywherePremio = function(desc) {
      $cordovaSocialSharing
        .share("", "Estoy usando la aplicación móvil de Club Personal y me gustó el siguiente premio:" +desc,  "", "") // Share via native share sheet
        .then(function(result) {
          // Success!
        }, function(err) {
          // An error occured. Show a message to the user
        });
    }

    // PopUp custom
    $scope.canjearPremio = function() {
      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        templateUrl: 'templates/canje-final.html',
        title: '¡Felicitaciones Usuario_nombre!',
        subTitle:'Canjeaste tu premio',
        buttons: [
          {
            text: 'Aceptar',
            type: 'button-positive',
            onTap: function(e) {
              $scope.goBack();
            }
          },
        ]
      });
    };

  })

