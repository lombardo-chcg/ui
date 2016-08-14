// how to run this test  karma start karma.conf.js 

"use strict";

describe('MainController', function() {

  beforeEach(module('DataHouseApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.hi', function() {
    it('should register', function() {

      var $scope = {};
      var controller = $controller('MainController', { $scope: $scope });

      expect($scope.hi).toEqual('hi');
    });
  });
});