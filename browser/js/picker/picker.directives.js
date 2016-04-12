northwind.directive('picker', function(){
	return{
		restrict: 'E',
		scope:{
			context: '@'
		},
		templateUrl: '/js/picker/picker.html',
		controller: 'PickerCtrl',
		link: function(scope, element, attr){
			scope.context = scope.context;	
		}
	};
})