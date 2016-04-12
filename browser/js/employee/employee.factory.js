northwind.factory('EmployeeFactory', function ($http) {

  var EmployeeFactory = {};

  function getData (res) { return res.data; }

  EmployeeFactory.fetchAll = function () {
    return $http.get('/api/employees')
    .then(getData);
  };

  EmployeeFactory.fetchByLetter = function (char) {
    return $http.get('/api/employees/' + char)
    .then(getData)
  };

  EmployeeFactory.activeLetters = function(){
    return $http.get('/api/employees')
    .then(getData)
    .then(function(employees){
      var letters = [];
      employees.forEach(function(employee){
        var letter = employee.name[0];
        if(letters.indexOf(letter) === -1){
          letters.push(letter);
        }
      })   
      return letters;
    })
  }

  return EmployeeFactory;

});