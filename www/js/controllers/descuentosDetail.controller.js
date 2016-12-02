angular.module('descuentosDetail.controller', [])
  .controller('DescuentosDetailCtrl', function($scope, $stateParams, Descuentos, $cordovaGeolocation, $ionicLoading) {
    $scope.descuento = Descuentos.getDescuento($stateParams.descuentoId);

    ionic.Platform.ready(function(){
     /* $ionicLoading.show({
        template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
      });*/

      var posOptions = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
      };

      $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
      /*  var lat  = position.coords.latitude;
        var long = position.coords.longitude;*/
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;
        var myLatlng = new google.maps.LatLng(lat, long);

        var lat1  = position.coords.latitude + 1;
        var long1 = position.coords.longitude +1 ;
        var myLatlng1 = new google.maps.LatLng(lat1, long1);

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

          var marker2 = new google.maps.Marker({
            map: $scope.map,
            animation: google.maps.Animation.DROP,
            position: myLatlng1
          });

          var infoWindow = new google.maps.InfoWindow({
            content: "<img class='custom-img-card' src='" + $scope.descuento.logoProveedor +"' style='width: 64px; height: 64px' /> <span>" + $scope.descuento.name + "</span>"
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

