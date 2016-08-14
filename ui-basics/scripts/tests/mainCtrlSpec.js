// how to run this test  karma start karma.conf.js 

"use strict";

describe('mainCtrl', function() {
	var mockDataService = {
		getToDos: function() {
			return [{"name": "to do 1"}, {"name": "to do 2"}]
		}
	}

  beforeEach(module('todoListApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.todos', function() {
    it('should set scope todos to the result of dataService.getToDos', function() {
    	var mockToDos = [ {"name": "to do 1"}, {"name": "to do 2"}];
      var $scope = {};

      var controller = $controller('mainCtrl', { $scope: $scope, dataService: mockDataService });
      console.log("SCOPE=====>", $scope)
      expect($scope.todos).toEqual(mockToDos);
    });
  });
});