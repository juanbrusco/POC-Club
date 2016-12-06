angular.module('descuentosDetail.controller', [])
  .controller('DescuentosDetailCtrl', function($scope, $stateParams, Descuentos, $cordovaGeolocation, $ionicLoading) {

    Descuentos.getDescuento().then(function(data){
      $scope.descuentoDetail = data
    });

    Descuentos.getMultimedia().then(function(data){
      $scope.multimedia = data
    });

    ionic.Platform.ready(function(){
      $ionicLoading.show({
        template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
      });

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

        $ionicLoading.hide();
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

