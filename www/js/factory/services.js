angular.module('starter.services', [])

  .factory('Descuentos', function($http) {
    var dest, more,detail, multimedia  = [];
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

    var getDescuentoDetail = function(descuentoId) {
      return $http.get("https://club.personal.com.ar/club/services/catalog/benefits/" + descuentoId)
        .then(function(response) {
          detail = response.data;
          return detail;
        });
    }

    var getMultimedia = function(descuentoId) {
      return $http.get("https://club.personal.com.ar/club/services/catalog/benefits/"+descuentoId+"/multimedia")
        .then(function(response) {
          multimedia = response.data;
          return multimedia[0];
        });
    }

    var getCercanos = function() {
      return $http.get("https://club.personal.com.ar/club/services/catalog/items?",
        {params:{$catalogItemType: 2, isForm: true, page: 1}})
        .then(function(response) {
          more = response.data;
          return more;
        });
    }

    return {
      destacados: getDesDestacados,

      getDescuentoDetail: getDescuentoDetail,

      getMultimedia: getMultimedia,

      loadMore: loadMore,

      incrementCount:function(){
        countD++;
      },

      cercanos: getCercanos

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
    var getPremioDetail = function(premioId) {
      return $http.get("https://club.personal.com.ar/club/services/catalog/rewards/" + premioId)
        .then(function(response) {
          detail = response.data;
          // console.log('Detail' + JSON.stringify(detail) + "" + response.status);
          return detail;
        });
    }

    return {

      destacados: getPremiosDestacados,

      loadMore: loadMore,

      getPremioDetail: getPremioDetail,

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

