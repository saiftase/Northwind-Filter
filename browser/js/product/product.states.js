northwind.config(function ($stateProvider) {

  $stateProvider.state('products', {
    url: '/products',
    templateUrl: '/js/product/products.html',
    controller: 'ProductCtrl',
    resolve: {
      allProducts: function (ProductFactory, $stateParams) {
        return ProductFactory.fetchAll();
      }
    }
  });

  $stateProvider.state('product', {
    url: '/products/:letter',
    templateUrl: '/js/product/products.html',
    controller: 'ProductCtrl',
    resolve: {
      allProducts: function (ProductFactory, $stateParams) {
        return ProductFactory.fetchByLetter($stateParams.letter);
      }
    }
  });

});