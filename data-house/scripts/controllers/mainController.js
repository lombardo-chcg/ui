"use strict";

angular.module("DataHouseApp")
	.controller("MainController", function($scope, dataService) {

		$scope.hi = "hi"

		this.setData = function(ajaxResponseObject) {
			$scope.companies = ajaxResponseObject.data;
		}

		dataService.fetchData(this.setData);

	})
