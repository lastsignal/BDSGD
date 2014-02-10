var grocerySmartsControllers = angular.module('grocerySmartsControllers', ["grocerySmartsServices"]);

grocerySmartsControllers.controller('HeaderCtrl', function($scope, $route, $location) {
    $scope.goBack = function() {
	window.history.back();
    };
    $scope.viewName = $location.url().substr(1);
//    console.log("current view" + $location.url());
//    console.log("current route" + $route);
});

grocerySmartsControllers.controller('DashboardCtrl', function($scope, $http) {
    $scope.test = "this is a test";
});

grocerySmartsControllers.controller('MealOfTheDayCtrl', function($scope, $routeParams) {
    $scope.budget = 200;
    $scope.thisMeal = 50;
    $scope.todayRecipe = {
	ingredients : "ingredients",
	instruction : "do this then do that"
    };
    $scope.todayDate = new Date();
});

grocerySmartsControllers.controller('ShoppingListCtrl', function($scope, $http, $routeParams, shoppingListFactory) {
    var promise = shoppingListFactory.getShoppingList();
    promise.then(function(response) {
	// response {data, status, headers, config}
	$scope.mealRelatedItems = response.data.mealRelatedItems;
	$scope.otherItems = response.data.otherItems;
    }, function(response) {
	console.log("error data " + response.data + "error status " + response.status
		+ "error header " + response.headers + "error config " + response.config);
    });
});

grocerySmartsControllers.controller('ProfileCtrl', function($scope) {
    $scope.today = new Date().toDateString();
});

