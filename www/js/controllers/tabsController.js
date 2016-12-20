angular.module('tabs.controller', ['ionic'])
  .controller('TabsCtrl', function($scope, $stateParams,$rootScope,$ionicTabsDelegate,$ionicHistory,$state, $ionicPopup) {


    $rootScope.isDetalle=true;


    $scope.showBar = function(){
      $ionicHistory.goBack();
      $ionicTabsDelegate.showBar(true);
    };

    // PopUp custom
    $scope.iniciarSesion = function() {
      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        templateUrl: 'templates/ingresar.html',
        title: 'Datos de usuario',
        // subTitle:'15555555',
        buttons: [
          {
            text: 'Cancelar',
            type: 'button-light',
            onTap: function(e) {
              return true;
            }
          },
          {
            text: 'Ingresar',
            type: 'button-positive',
            onTap: function(e) {
              return true;
            }
          },
        ]
      });
    };

    // PopUp custom
    $scope.cerrarSesion = function() {
      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        // templateUrl: 'templates/perfil.html',
        title: '¿Está seguro que desea cerrar la sesión actual?',
        // subTitle:'15555555',
        buttons: [
          {
            text: 'Cancelar',
            type: 'button-light',
            onTap: function(e) {
              return true;
            }
          },
          {
            text: 'Cerrar Sesión',
            type: 'button-positive',
            onTap: function(e) {
              return true;
            }
          },
        ]
      });
    };

    // PopUp custom
    $scope.getDatosPerfil = function() {
      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        templateUrl: 'templates/perfil.html',
        title: 'Usuario_nombre',
        subTitle:'15555555',
        buttons: [
          {
            text: 'Aceptar',
            type: 'button-positive',
            onTap: function(e) {
              return true;
            }
          },
        ]
      });
    };

    // PopUp custom
    $scope.getAcerca = function() {
      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        templateUrl: 'templates/acerca.html',
        title: 'Acerca de Club Personal App',
        buttons: [
          {
            text: 'Calificar App',
            type: 'button-light',
            onTap: function(e) {
              return true;
            }
          },
          {
            text: 'Aceptar',
            type: 'button-positive',
            onTap: function(e) {
              return true;
            }
          },
        ]
      });
    };

    // PopUp custom
    $scope.getAjustes = function() {
      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        templateUrl: 'templates/ajustes.html',
        title: 'Ajustes',
        buttons: [
          {
            text: 'Cancelar',
            type: 'button-light',
            onTap: function(e) {
              return true;
            }
          },
          {
            text: 'Guardar',
            type: 'button-positive',
            onTap: function(e) {
              return true;
            }
          },
        ]
      });
    };
    // $scope.getDatosPerfil = function (id) {
    //   $ionicTabsDelegate.showBar(false);
    //   $state.go('tab.perfil', {'perfilId': id});
    // };

  })
