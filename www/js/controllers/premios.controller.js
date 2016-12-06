angular.module('premios.controller', [])
  .controller('PremiosCtrl', function($scope, $ionicPopup, Premios, $state) {
    $scope.pPremios = [];
    $scope.settings = {
      enableFriends: true
    };

    Premios.destacados().then(function(data){
      $scope.pDestacados = data
    });

    $scope.loadMore =function() {
      Premios.loadMore().then(function(data){
        [].push.apply($scope.pPremios, data);
        Premios.incrementCount();
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    };

    $scope.$on('$stateChangeSuccess', function() {
      $scope.loadMore();
    });

    getPremio = function(premioId) {
      for (var i = 0; i < $scope.pDestacados.length; i++) {
        if ($scope.pDestacados[i].id === parseInt(premioId)) {
          return $scope.pDestacados[i];
        }
      }
      for (var j = 0; j < $scope.pPremios.length; j++) {
        if ($scope.pPremios[j].id === parseInt(premioId)) {
          return $scope.pPremios[j];
        }
      }
      return null;
    },

    $scope.getDetailPremio = function (id) {
      $state.go('tab.premios-detail', {'premioId': id});
    };


    // PopUp custom
    $scope.showPopup = function(premioId) {
      var premio = getPremio(premioId);
      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<img ng-src="' + premio.image + '" style="width: 60px; height: 40px;"/>',
        title: 'Canjear Premio',
        subTitle: premio.pointsValue + " Puntos",
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

  });
