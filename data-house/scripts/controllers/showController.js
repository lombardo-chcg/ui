"use strict";

angular.module("DataHouseApp")
	.controller("ShowController", function($scope, $stateParams) {

		var companyIdIndexPosition = $stateParams.company_id;

		console.log($stateParams)

		$scope.company = $scope.companies[(companyIdIndexPosition-1)]

	})