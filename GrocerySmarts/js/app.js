var grocerySmartsApp = angular.module('grocerySmartsApp', [
'ngRoute',
'grocerySmartsControllers'
]);

grocerySmartsApp.config(['$routeProvider',
function ($routeProvider) {
	$routeProvider.
		when('/dashboard', {
			templateUrl: 'partials/dashboard.html',
			controller: 'DashboardCtrl'
		}).
		when('/meal-of-the-day', {
			templateUrl: 'partials/meal-of-the-day.html',
			controller: 'MealOfTheDayCtrl'
		}).
		when('/shopping-list', {
			templateUrl: 'partials/shopping-list.html',
			controller: 'ShoppingListCtrl'
		}).
		when('/meal-plan', {
			templateUrl: 'partials/meal-plan.html',
			controller: 'MealPlanCtrl'
		}).
		when('/plan-grocery', {
			templateUrl: 'partials/plan-grocery.html',
			controller: 'PlanGroceryCtrl'
		}).
		when('/pantry', {
			templateUrl: 'partials/pantry.html',
			controller: 'PantryCtrl'
		}).
		when('/recipes', {
			templateUrl: 'partials/recipes.html',
			controller: 'RecipesCtrl'
		}).
		when('/preferences', {
			templateUrl: 'partials/preferences.html',
			controller: 'PreferencesCtrl'
		}).
		when('/budget', {
			templateUrl: 'partials/budget.html',
			controller: 'BudgetCtrl'
		}).
		otherwise({
		redirectTo: '/dashboard'
	});
}]);




