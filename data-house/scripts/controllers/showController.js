"use strict";

angular.module("DataHouseApp")
	.controller("ShowController", function($scope, $stateParams, dataService) {

		var companyIdIndexPosition = $stateParams.company_id;

		// $scope.company = $scope.companies[(companyIdIndexPosition-1)]

		$scope.average = dataService.getAverage($scope.company.data_readings)

		$scope.toggleShowValue = true;

		$scope.show = function() {
			$scope.toggleShowValue = true;
		}

		$scope.hide = function() {
			$scope.toggleShowValue = false;
		}
	})