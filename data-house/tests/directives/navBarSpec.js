"use strict";

describe("navBar", function() {
	var $compile, $rootScope, directive;

	beforeEach(module("DataHouseApp"));
	beforeEach(module("templates/directives/navBar.html"));


  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('renders a navBar', function() {
  	directive = angular.element('<nav-bar />');

    // Compile a piece of HTML containing the directive
    var navBarHtml = $compile(directive)($rootScope);

    // fire all the watches, so the scope expression will be evaluated
    $rootScope.$digest();

    // Check that the compiled element contains the templated content
    expect(navBarHtml.html()).toContain('<a class="navbar-brand" href="#">DataHouseApp</a>');
  });	
})