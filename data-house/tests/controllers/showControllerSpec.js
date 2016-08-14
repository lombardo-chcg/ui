"use strict";

describe('ShowController', function() {
	var mockDataService = {
		getAverage: function() {
      return 50;
    }
	}

  beforeEach(module('DataHouseApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.average', function() {
    it('should get the average from the data service', function() {
      var $scope = {companies: [], company: {}};

      var controller = $controller('ShowController', { $scope: $scope, dataService: mockDataService });

      expect($scope.average).toEqual(50);
    });
  });

  describe('$scope.average', function() {
    it('can toggle the state of the data display table', function() {
      var $scope = {companies: [], company: {}};

      var controller = $controller('ShowController', { $scope: $scope, dataService: mockDataService });

      $scope.hide()

      expect($scope.toggleShowValue).toEqual(false);
    });
  });

});