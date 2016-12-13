angular.module('descuentosDetail.controller', ['ionic','ngCordova'])
  .controller('DescuentosDetailCtrl', function($scope, $stateParams, Descuentos, $cordovaGeolocation, $ionicLoading, $cordovaSms, $cordovaSocialSharing) {

    Descuentos.getDescuento().then(function(data){
      $scope.descuentoDetail = data
    });

    Descuentos.getMultimedia().then(function(data){
      $scope.multimedia = data
    });


    // http://pointdeveloper.com/how-to-send-an-sms-with-ionic-framework-and-ngcorodva/
    $scope.sms={};

    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: 'INTENT'  // send SMS with the default SMS app
        //intent: ''        // send SMS without open any other app
      }};

      $scope.sendSms=function(keyword,number){
      console.log($scope.sms.number);
      console.log($scope.sms.message);

      $cordovaSms
        .send(number, keyword, options)
        .then(function() {
          // Success! SMS was sent
          console.log('Success');
        }, function(error) {
          // An error occurred
          console.log(error);
        });//then
    };//sendSms

    //$cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "https://www.thepolyglotdeveloper.com");
    $scope.shareAnywhere = function(desc) {
      $cordovaSocialSharing
        .share("Estoy usando la aplicación móvil de Club Personal y me gustó el siguiente descuento:", desc,  "", "") // Share via native share sheet
        .then(function(result) {
          // Success!
        }, function(err) {
          // An error occured. Show a message to the user
        });
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

