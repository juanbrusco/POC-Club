angular.module('premios.controller', [])
  .controller('PremiosCtrl', function($scope, $ionicPopup, Premios) {
    $scope.premios = [];
    $scope.settings = {
      enableFriends: true
    };

    Premios.destacados().then(function(data){
      $scope.destacados = data
    });

    $scope.loadMore =function() {
      Premios.loadMore().then(function(data){
        [].push.apply($scope.premios, data);
        Premios.incrementCount();
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    };

    $scope.$on('$stateChangeSuccess', function() {
      $scope.loadMore();
    });

    // PopUp custom
    $scope.showPopup = function(premioId) {
      var premio = Premios.getPremio(premioId);
      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<img ng-src="' + premio.image + '" style="width: 60px; height: 40px;"/>',
        title: 'Canjear Premio',
        subTitle: '30.000 Puntos + $500',
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
