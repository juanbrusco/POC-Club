angular.module('descuentosDetail.controller', ['ionic','ngCordova'])
  .controller('DescuentosDetailCtrl', function($scope, $stateParams, Descuentos, $cordovaGeolocation, $ionicLoading, $cordovaSms, $cordovaSocialSharing,$ionicHistory, $cordovaKeyboard, $location, $ionicPlatform, $ionicTabsDelegate, $ionicLoading,$state) {

    $ionicLoading.show({
      template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Cargando...'
    });

    Descuentos.getDescuentoDetail($stateParams.descuentoId).then(function(data){
      $scope.descuentoDetail = data
      $ionicLoading.hide();
    });

    Descuentos.getMultimedia($stateParams.descuentoId).then(function(data){
      $scope.multimedia = data
    });

    $scope.shareAnywhere = function(desc) {
      $cordovaSocialSharing
        .share("", "Estoy usando la aplicación móvil de Club Personal y me gustó el siguiente descuento:" +desc,  "", "") // Share via native share sheet
        .then(function(result) {
          // Success!
        }, function(err) {
          // An error occured. Show a message to the user
        });
    }

    $scope.shareSMS = function(keyword,number) {
      window.plugins.socialsharing.shareViaSMS(keyword,number.toString(), function(msg) {console.log('ok: ' + msg)}, function(msg) {alert('error: ' + msg)})
    }

    $ionicPlatform.registerBackButtonAction(function() {
      $scope.goBack();
    }, 100);

    $scope.goBack= function(){
      $state.go($stateParams.back, {});
    }

    ionic.Platform.ready(function(){
      /* $ionicLoading.show({
         template: '<ion-spinner icon="bubbles"></ion-spinner>'
       });*/

      var posOptions = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
      };

      $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;
        var myLatlng = new google.maps.LatLng(lat, long);

        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        $scope.map = map;

        // $ionicLoading.hide();
        google.maps.event.addListenerOnce($scope.map, 'idle', function(){
          var marker = new google.maps.Marker({
            map: $scope.map,
            animation: google.maps.Animation.DROP,
            position: myLatlng
          });

          var infoWindow = new google.maps.InfoWindow({
            content: "<img class='custom-img-card' src='" + $scope.descuentoDetail.image +"' style='width: 64px; height: 64px' /> <span>" + $scope.descuentoDetail.name + "</span>"
          });

          google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open($scope.map, marker);
          });

        });

      }, function(err) {
        $ionicLoading.hide();
        console.log(err);
      });

    });
  })

