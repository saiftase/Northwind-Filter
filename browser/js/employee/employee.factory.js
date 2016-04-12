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

  return EmployeeFactory;

});