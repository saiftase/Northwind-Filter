northwind.controller('PickerCtrl', function ($scope, ProductFactory, EmployeeFactory) {
	$scope.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	
	$scope.letterActive = function(letter){
		return ($scope.activeLetters.indexOf(letter) !== -1);
	}

});