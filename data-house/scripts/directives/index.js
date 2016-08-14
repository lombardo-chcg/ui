"use strict";

angular.module("DataHouseApp")
	.directive("index", function() {
		return {
			restrict: "E",
			replace: true,
			templateUrl: "templates/directives/index.html"
		}
	})