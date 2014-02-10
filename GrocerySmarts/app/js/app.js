var grocerySmartsApp = angular.module("grocerySmartsApp", [ "ngRoute", "grocerySmartsControllers" ]);

grocerySmartsApp.appConfig = {
    "views" : [
	{
            "viewUrl" : "/dashboard",
            "routeConfig" : { "templateUrl": "app/view/dashboard.html", "controller": "DashboardCtrl" }
	},
	{
	    "viewUrl" : "/meal-of-the-day",
	    "routeConfig" : { "templateUrl": "app/view/meal-of-the-day.html", "controller": "MealOfTheDayCtrl" }
	},
	{
	    "viewUrl" : "/shopping-list",
	    "routeConfig" : { "templateUrl": "app/view/shopping-list.html", "controller": "ShoppingListCtrl" }
	},
	{
	    "viewUrl" : "/meal-plan",
	    "routeConfig" : { "templateUrl": "app/view/meal-plan.html", "controller": "MealPlanCtrl" }
	},
	{
	    "viewUrl" : "/plan-grocery",
	    "routeConfig" : { "templateUrl": "app/view/plan-grocery.html", "controller": "PlanGroceryCtrl" }
	},
	{
	    "viewUrl" : "/pantry",
	    "routeConfig" : { "templateUrl": "app/view/pantry.html", "controller": "PantryCtrl" }
	},
	{
	    "viewUrl" : "/recipes",
	    "routeConfig" : { "templateUrl": "app/view/recipes.html", "controller": "RecipesCtrl" }
	},
	{
	    "viewUrl" : "/preferences",
	    "routeConfig" : { "templateUrl": "app/view/preferences.html", "controller": "PreferencesCtrl" }
	},
	{
	    "viewUrl" : "/profile",
	    "routeConfig" : { "templateUrl": "app/view/profile.html", "controller": "ProfileCtrl" }
	},
	{
	    "viewUrl" : "/budget",
	    "routeConfig" : { "templateUrl": "app/view/budget.html", "controller": "BudgetCtrl" }
	}
    ],
    "defaultViewUrl" : "/dashboard"
};


grocerySmartsApp.config([ "$routeProvider", function($routeProvider) {
    var config = grocerySmartsApp.appConfig;
    config.views.forEach(function(view) {
	$routeProvider.when(view.viewUrl, view.routeConfig);
    });
    $routeProvider.otherwise({ "redirectTo" : config.defaultViewUrl });
} ]);
