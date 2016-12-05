angular.module('starter.services', [])

  .factory('Descuentos', function($http) {
    var dest, more = [];
    var countD = 1;
    var getDesDestacados = function() {
      return $http.get("https://club.personal.com.ar/club/services/catalog/benefits/distinguished")
        .then(function(response) {
          dest = response.data;
          return dest;
        });
    }
    var loadMore = function() {
      return $http.get("https://club.personal.com.ar/club/services/catalog/items?",
        {params:{$catalogItemType: 2, isForm: true, page: countD}})
        .then(function(response) {
          more = response.data;
          return more;
        });
    }
    return {
      destacados: getDesDestacados,

     /* getDescuento: function(descuentoId) {
        for (var i = 0; i < dest.length; i++) {
          if (dest[i].id === parseInt(descuentoId)) {
            return dest[i];
          }
        }
        for (var j = 0; j < more.length; j++) {
          if (more[j].id === parseInt(descuentoId)) {
            return more[j];
          }
        }
        return null;
      },*/

      loadMore: loadMore,

      incrementCount:function(){
        countD++;
      }
    };
  })

  .factory('Premios', function($http) {
    var dest, more = [];
    var countP = 1;
    var getPremiosDestacados = function() {
      return $http.get("https://club.personal.com.ar/club/services/catalog/rewards/distinguished")
        .then(function(response) {
          dest = response.data;
          return dest;
        });
    }
    var loadMore = function() {
      return $http.get("https://club.personal.com.ar/club/services/catalog/items?",
        {params:{$catalogItemType: 1, isForm: true, page: countP}})
        .then(function(response) {
          more = response.data;
          return more;
        });
    }

    return {

      destacados: getPremiosDestacados,

      loadMore: loadMore,

     /* getPremio: function(premioId) {
        for (var i = 0; i < dest.length; i++) {
          if (dest[i].id === parseInt(premioId)) {
            return dest[i];
          }
        }
        for (var j = 0; j < more.length; j++) {
          if (more[j].id === parseInt(premioId)) {
            return more[j];
          }
        }
        return null;
      },*/

      incrementCount:function(){
        countP++;
      }
    };
  });

