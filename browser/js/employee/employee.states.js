northwind.config(function ($stateProvider) {

  $stateProvider.state('employees', {
    url: '/employees',
    templateUrl: '/js/employee/employees.html',
    controller: 'EmployeeCtrl',
    resolve: {
      allEmployees: function (EmployeeFactory) {
        return EmployeeFactory.fetchAll();
      }
    }
  });

  $stateProvider.state('employee', {
    url: '/employees/:letter',
    templateUrl: '/js/employee/employees.html',
    controller: 'EmployeeCtrl',
    resolve: {
      allEmployees: function (EmployeeFactory, $stateParams) {
        return EmployeeFactory.fetchByLetter($stateParams.letter);
      }
    }
  });

});
