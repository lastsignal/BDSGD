var grocerySmartsServices = angular.module('grocerySmartsServices', []);

grocerySmartsServices.factory("shoppingListFactory", function($http) {
    var fact = {};

    fact.getShoppingList = function() {
	var promise = $http.get("mock/data/shoppingList.json");
	return promise;
    };

    return fact;
});
