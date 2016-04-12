northwind.config(function ($stateProvider) {

  $stateProvider.state('employees', {
    url: '/employees',
    templateUrl: '/js/employee/employees.html'
  });

});
