angular.module('home.controller', ['ui.swiper'])

  .controller('HomeCtrl', function($scope) {

    $scope.openWindow = function(data){
      window.open(data,'_blank','location=no');
    };
    $scope.slides = [
      {
        img: "https://s14.postimg.org/m9s2e7ncv/h1_whatsapp.jpg",
        link: "http://www.personal.com.ar/tienda/prepago/whatsapp/?icn=prepago_whatsapp&ici=sin_gastar_datos_h1_home"
      },
      {
        img: "https://s14.postimg.org/3wlllus1d/h1_internetentodo.jpg",
        link: "http://tienda.arnet.com.ar/detalle-arnet-6megas.html?icn=arnetyvoz&ici=oferta_h1_home"
      }];

  });
