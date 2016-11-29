angular.module('starter.services', [])

  .factory('Descuentos', function($http) {
    var all, more = [];
    var countF = 1;
    var getData = function() {
      return $http.get("https://club.personal.com.ar/club/services/catalog/benefits/distinguished")
        .then(function(response) {
          all = response.data;
          return all;
        });
    }
    var loadMore = function() {
      return $http.get("https://club.personal.com.ar/club/services/catalog/items?",
        {params:{$catalogItemType: 2, isForm: true, page: countF}})
        .then(function(response) {
          more = response.data;
          return more;
        });
    }
    return {
      all: getData,

      getDescuento: function(descuentoId) {
        for (var i = 0; i < all.length; i++) {
          if (all[i].id === parseInt(descuentoId)) {
            return all[i];
          }
        }
        return null;
      },

      loadMore: loadMore,

      incrementCount:function(){
        countF++;
      }
    };
  })

  .factory('Premios', function() {
    // Might use a resource here that returns a JSON array

    // https://www.uno-de-piera.com/consumir-json-con-angularjs-con-resources-y-http/

    // Some fake testing data
    var premios = [
      {
        id: 0,
        title: 'La Granja Chocolatada',
        desc: 'La Granja Chocolatada. Diversión asegurada para lo más chicos',
        img: 'http://resources.personal.com.ar/images/test/Club-Detalle-Granja.png',
        puntos: '999999',
        pesos: '99.999,99'
      },
      {
        id: 1,
        title: 'Vuelo en globo',
        desc: 'Experiencia vuelo en globo en los cielos de Capilla del Señor',
        img: 'http://resources.personal.com.ar/images/test/BsAs_Outdoor_globo-1.png',
        puntos: '999999',
        pesos: '99.999,99'
      },
      {
        id: 2,
        title: 'Pack Internet',
        desc: 'Pack Internet + 7000 SMS x 7 dias',
        img: 'http://resources.personal.com.ar/images/test/Pack-1.png',
        puntos: '999999',
        pesos: '99.999,99'
      },
      {
        id: 0,
        title: 'La Granja Chocolatada',
        desc: 'La Granja Chocolatada. Diversión asegurada para lo más chicos',
        img: 'http://resources.personal.com.ar/images/test/Club-Detalle-Granja.png',
        puntos: '999999',
        pesos: '99.999,99'
      },
      {
        id: 1,
        title: 'Vuelo en globo',
        desc: 'Experiencia vuelo en globo en los cielos de Capilla del Señor',
        img: 'http://resources.personal.com.ar/images/test/BsAs_Outdoor_globo-1.png',
        puntos: '999999',
        pesos: '99.999,99'
      },
      {
        id: 2,
        title: 'Pack Internet',
        desc: 'Pack Internet + 7000 SMS x 7 dias',
        img: 'http://resources.personal.com.ar/images/test/Pack-1.png',
        puntos: '999999',
        pesos: '99.999,99'
      },

    ];

    return {
      allPremios: function() {
        return premios;
      },
      getPremio: function(premioId) {
        for (var i = 0; i < premios.length; i++) {
          if (premios[i].id === parseInt(premioId)) {
            return premios[i];
          }
        }
        return null;
      }
    };
  });

