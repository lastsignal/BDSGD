﻿var grocerySmartsControllers = angular.module('grocerySmartsControllers', ["grocerySmartsServices"]);

grocerySmartsControllers.controller('HeaderCtrl', function($scope) {
    $scope.goBack = function() {
	window.history.back();
    };
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
