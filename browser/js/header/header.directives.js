northwind.directive('header', function(){
	return{
		restrict: 'E', 
		scope: {
			activeIndex: '@'
		}, 
		templateUrl: '/js/header/header.html',
		link: function(scope, element, attr){
			scope.activeIndex = scope.activeIndex;
			scope.links = [
				{label: "Home", state: 'home'},
				{label: "Employees", state: 'employees'},
				{label: "Products", state: 'products'}
			]
		}
	};
})