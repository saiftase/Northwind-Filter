northwind.directive('list', function(){
	return{
		restrict: 'E', 
		scope: {
			items: '='
		}, 
		templateUrl: '/js/list/list.html',
		link: function(scope, element, attr){
			scope.items = scope.items;	
		}
	};
})