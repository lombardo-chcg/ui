"use strict";

angular.module("DataHouseApp")
	.directive("navBar", function() {
		return {
			restrict: "E",
			replace: true,
			templateUrl: "templates/directives/navBar.html"
		}
	})