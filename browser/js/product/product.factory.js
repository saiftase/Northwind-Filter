northwind.factory('ProductFactory', function ($http, $q) {

  var ProductFactory = {};

  function getData (res) { return res.data; }

  ProductFactory.fetchAll = function () {
    return $http.get('/api/products')
    .then(getData);
  };

  ProductFactory.fetchByLetter = function (char) {
    return $http.get('/api/products/' + char)
    .then(getData)
  };

  return ProductFactory;

});