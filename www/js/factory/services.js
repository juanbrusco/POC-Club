angular.module('starter.services', [])

  .factory('Descuentos', function() {

    // Un ejemplo de obtener datos hardcodeado
    // Agregar servicios rest
    var descuentos = [{
      id: 0,
      name: 'Descuento 1',
      lastText: 'me descontas algo?',
      face: 'img/ionic.png'
    }, {
      id: 1,
      name: 'Descuento 2',
      lastText: 'Quiero todo gratis',
      face: 'img/ionic.png'
    }, {
      id: 2,
      name: 'Descuento 3',
      lastText: 'Cargame creditos',
      face: 'img/ionic.png'
    }, {
      id: 3,
      name: 'Descuento 4',
      lastText: 'Android!',
      face: 'img/ionic.png'
    }, {
      id: 4,
      name: 'Descuento 5',
      lastText: 'Vaikings',
      face: 'img/ionic.png'
    }];

    return {
      all: function() {
        return descuentos;
      },
      remove: function(descuento) {
        descuentos.splice(descuentos.indexOf(descuento), 1);
      },
      get: function(descuentoId) {
        for (var i = 0; i < descuentos.length; i++) {
          if (descuentos[i].id === parseInt(descuentoId)) {
            return descuentos[i];
          }
        }
        return null;
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

