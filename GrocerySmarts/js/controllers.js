var grocerySmartsControllers = angular.module('grocerySmartsControllers', []);

grocerySmartsControllers.controller('HeaderCtrl', ['$scope',
function ($scope) {
	$scope.goBack = function() {
		window.history.back();
	};
}]);

grocerySmartsControllers.controller('DashboardCtrl', ['$scope', '$http',
function ($scope, $http) {
	$scope.test = "this is a test";
}]);

grocerySmartsControllers.controller('MealOfTheDayCtrl', ['$scope', '$routeParams',
function ($scope, $routeParams) {
	$scope.budget = 200;
	$scope.thisMeal = 50;
	$scope.todayRecipe = {
		ingredients: "ingredients",
		instruction: "do this then do that"
	};
	$scope.todayDate = new Date();
}]);

grocerySmartsControllers.controller('ShoppingListCtrl', ['$scope', '$http', '$routeParams',
function ($scope, $http, $routeParams) {

	$http.get('json/shoppingList.json').success(function (data) {
		$scope.mealRelatedItems = data.mealRelatedItems;
		$scope.otherItems = data.otherItems;
	});
}]);
