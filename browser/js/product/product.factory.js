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

  ProductFactory.activeLetters = function(){
    return $http.get('/api/products')
    .then(getData)
    .then(function(products){
      var letters = [];
      products.forEach(function(product){
        var letter = product.name[0];
        if(letters.indexOf(letter) === -1){
          letters.push(letter);
        }
      })   
      return letters;
    })
  }

  return ProductFactory;

});