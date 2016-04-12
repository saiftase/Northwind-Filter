northwind.controller('ProductCtrl', function ($scope, allProducts) {
  $scope.products = allProducts;

  //Pass into picker directive
  //(Directives don't handle async data well)
  //Also, don't use factory method, since that makes extra call
  var letters = [];
  $scope.products.forEach(function(product){
    var letter = product.name[0];
    if(letters.indexOf(letter) === -1){
      letters.push(letter);
    }
  })
  $scope.letters = letters; 

});