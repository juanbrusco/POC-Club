angular.module('premios.controller', [])
  .controller('PremiosCtrl', function($scope, $ionicPopup, Premios) {
    $scope.settings = {
      enableFriends: true
    };

    $scope.premios = Premios.allPremios();

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
