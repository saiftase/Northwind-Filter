const clearDb = function () {
  return Promise.map(['Employee', 'Product'], function (modelName) {
    return mongoose.model(modelName).remove();
  });
};

var Promise = require('bluebird');
var mongoose = require('mongoose');

var Employee = require('./server/db/models/employee');
var Product = require('./server/db/models/product');
var models = [Employee, Product];

const connectToDb = require('./server/db');

var data = {
  Employee: [
    {name: "Bill Gates"}, 
    {name: "Elon Musk"},
    {name: "Tim Cook"}, 
    {name: "Steve Jobs"},
    {name: "Steve Wozniak"},
    {name: "Jeff Bezos"},
    {name: "Mark Zuckerberg"},
    {name: "Larry Page"}, 
    {name: "Sergey Brin"}
  ],
  Product: [
    {name: "Facebook", price: 300000000000},
    {name: "Microsoft", price: 430000000000},
    {name: "Apple", price: 600000000000},
    {name: "Amazon", price: 280000000000},
    {name: "Tesla", price: 32000000000},
    {name: "Google", price: 530000000000}
  ]
};

connectToDb.then(function(){

  mongoose.connection.db.dropDatabase(function() {
    Promise.map(Object.keys(data), function(modelName) {
      var model  = data[modelName];
      return Promise.map(model, function(item){

        var resolvedModelName = "";
        if(modelName === "Employee"){
          resolvedModelName = Employee;
        }else if(modelName === "Product"){
          resolvedModelName = Product;
        }

        return resolvedModelName.create(item)
        .then(function(item){
          console.log(modelName, item);
        });

      })
    })
    .then(function() {
      console.log("Finished inserting data");
    })
    .then(function() {
      mongoose.connection.close(function(){
        console.log('mongoose connection has been closed');
      });
    });

  });
});

