northwind.directive('picker', function(){
	return{
		restrict: 'E',
		scope:{
			context: '@',
			letters: '='
		},
		templateUrl: '/js/picker/picker.html',
		controller: 'PickerCtrl',
		link: function(scope, element, attr){
			scope.context = scope.context;
			scope.activeLetters = scope.letters;
		}
	};
})