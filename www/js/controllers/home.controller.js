angular.module('home.controller', ['ui.swiper'])

  .controller('HomeCtrl', function($scope, $state) {


    document.addEventListener('backbutton', function(event){
      if($state.is('tab.home')){
        event.preventDefault(); // EDIT
        navigator.app.exitApp(); // exit the app
      }
    });


    $scope.openWindow = function(data){
      cordova.InAppBrowser.open(data, '_system', 'location=yes');
      // window.open(data,'_system');
    };
    $scope.slides = [
      {img: "http://www.esquinarockweb.com.ar/imgPag/personalfestflyer16.jpg",
        link: "http://www.personalfest.com.ar/#!/home"
      },
      {
        img: "http://www.indiehoy.com/wp-content/uploads/2016/06/personal-fest-2016.jpg",
        link: "http://www.personalfest.com.ar/#!/home"
      },
      {
        img: "https://i2.wp.com/fandeldescuento.com/wp-content/uploads/2016/11/ya-estas-pensando-en-tus-proximas-vacaciones-con-clubpersona-2016-11-15.jpg?fit=800%2C418&ssl=1",
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
