angular.module('starter.services', [])

.factory('Descuentos', function() {

  // Un ejemplo de obtener datos hardcodeado
  // Agregar servicios rest
  var descuentos = [{
    id: 0,
    name: 'Descuento 1',
    lastText: 'me descontas algo?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Descuento 2',
    lastText: 'Quiero todo gratis',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Descuento 3',
    lastText: 'Cargame creditos',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Descuento 4',
    lastText: 'Android!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Descuento 5',
    lastText: 'Vaikings',
    face: 'img/mike.png'
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
});
