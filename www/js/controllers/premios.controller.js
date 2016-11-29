angular.module('premios.controller', [])
  .controller('PremiosCtrl', function($scope, $ionicPopup, Premios) {
    $scope.settings = {
      enableFriends: true
    };

    $scope.premios = Premios.allPremios();

    // PopUp custom
    $scope.showPopup = function(premioId) {
      var premio = Premios.getPremio(premioId);
      $scope.data = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<img ng-src="http://resources.personal.com.ar/images/test/Logo-Sushi.png" style="width: 60px; height: 40px;"/>',
        title: 'Canjear Premio',
        subTitle: premio.puntos + ' Puntos + $' + premio.pesos,
        scope: $scope,
        buttons: [
          { text: 'Cancelar',
            type: 'button-light'},
          {
            text: '<b>Canjear</b>',
            type: 'button-positive',
            onTap: function(e) {

            }
          }
        ]
      });


    };

    // A confirm dialog
    $scope.showConfirm = function(premioId) {
      var premio = Premios.getPremio(premioId);
      var confirmPopup = $ionicPopup.confirm({
        title:'Canjear',
        template: premio.desc
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
