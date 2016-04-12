northwind.controller('EmployeeCtrl', function ($scope, allEmployees) {
  $scope.employees = allEmployees;

  //Pass into picker directive
  //(Directives don't handle async data well)
  //Also, don't use factory method, since that makes extra call
  var letters = [];
  $scope.employees.forEach(function(employee){
    var letter = employee.name[0];
    if(letters.indexOf(letter) === -1){
      letters.push(letter);
    }
  })
  $scope.letters = letters; 
});