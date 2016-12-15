angular.module('home.controller', ['ui.swiper'])

  .controller('HomeCtrl', function($scope) {

    $scope.openWindow = function(data){
      cordova.InAppBrowser.open(data, '_system', 'location=yes');
      // window.open(data,'_system');
    };
    $scope.slides = [
      {
        img: "http://www.indiehoy.com/wp-content/uploads/2016/06/personal-fest-2016.jpg",
        link: "http://www.personalfest.com.ar/#!/home"
      },
      {
        img: "http://www.personalfest.com.ar/images/horarios.jpg",
        link: "http://www.personalfest.com.ar/#!/home"
      },
      {
        img: "http://www.personalfest.com.ar/images/mapa_predio.jpg",
        link: "http://www.personalfest.com.ar/#!/home"
      }];

    // $scope.options = {
    //   loop: false,
    //   effect: 'fade',
    //   speed: 500,
    // }
    //
    // $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
    //   // data.slider is the instance of Swiper
    //   $scope.slider = data.slider;
    // });
    //
    // $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
    //   console.log('Slide change is beginning');
    // });
    //
    // $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
    //   // note: the indexes are 0-based
    //   $scope.activeIndex = data.slider.activeIndex;
    //   $scope.previousIndex = data.slider.previousIndex;
    // });

  });
