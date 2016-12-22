angular.module('cercanos.controller', [])
  .controller('CercanosCtrl', function($scope,$ionicPopup,Descuentos,$state,$ionicTabsDelegate, $cordovaGeolocation,$ionicLoading) {
    $scope.cercanos = [];
    Descuentos.cercanos().then(function(data){
      for (var i = 0; i < data.length; i++) {
        $scope.cercanos[i] = data[i];
      }
    });

    $scope.getDetailDescuento = function (id) {
      $state.go('descuentosDetail', {'descuentoId': id,'back':'tab.cercanos'});
    };

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
        console.log(lat);
        console.log(long);
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map-cercanos"), mapOptions);

        $scope.mapCercanos = map;

        // $ionicLoading.hide();
        google.maps.event.addListenerOnce($scope.mapCercanos, 'idle', function(){

          // Add 5 markers to map at random locations.
          // For each of these markers, give them a title with their index, and when
          // they are clicked they should open an infowindow with text from a secret
          // message.
          var secretMessages = ['This', 'is', 'the', 'secret', 'message'];
          var lats=[lat, lat + 0.001000,lat - 0.000200,lat + 0.001600,lat - 0.000500];
          var longs=[long,long + 0.00080,long - 0.00100, long - 0.00030, long -0.00200];

          for (var i = 0; i < secretMessages.length; ++i) {
            var marker = new google.maps.Marker({
              position: {
                lat: lats[i],
                lng: longs[i]
              },
              map: map,
              animation: google.maps.Animation.DROP
            });
            attachSecretMessage(marker, secretMessages[i]);
          }
         /* var marker = new google.maps.Marker({
            map: $scope.map,
            animation: google.maps.Animation.DROP,
            position: myLatlng
          });*/

          /*var infoWindow = new google.maps.InfoWindow({
            content: "<img class='custom-img-card' src='" + $scope.descuentoDetail.image +"' style='width: 64px; height: 64px' /> <span>" + $scope.descuentoDetail.name + "</span>"
          });*/

         /* google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open($scope.map, marker);
          });*/

        });

      }, function(err) {
        $ionicLoading.hide();
        console.log(err);
      });

    });
    function attachSecretMessage(marker, secretMessage) {
      var infowindow = new google.maps.InfoWindow({
        content: secretMessage
      });

      marker.addListener('click', function() {
        infowindow.open(marker.get('map-cercanos'), marker);
      });
    }
  });
