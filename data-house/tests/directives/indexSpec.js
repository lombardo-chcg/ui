var mock_data = [{
  "id": 1,
  "company_name": "Brainsphere",
  "url": "https://sitemeter.com/eget.json",
  "email": "rshaw0@trellian.com",
  "phone": "572-55-2738",
  "city": "Wilmington",
  "state": "Delaware",
  "asset_description": "vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean",
  "data_readings": [1,2,3,4,5,6,7]
}]

describe("index", function() {
  var $compile, $rootScope, directive;

  beforeEach(module("DataHouseApp"));
  beforeEach(module("templates/directives/index.html"));


  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));



  it('renders a table header row', function() {
    directive = angular.element('<index />');

    // Compile a piece of HTML containing the directive
    var indexHtml = $compile(directive)($rootScope);

    // fire all the watches, so the scope expression will be evaluated
    $rootScope.$digest();

    // Check that the compiled element contains the templated content
    expect(indexHtml.html()).toContain('<th>Company Name</th>');
  }); 


  it('renders a table based on a collection that is passed in', function() {
    directive = angular.element('<index />');

    $rootScope.companies = mock_data;

    // Compile a piece of HTML containing the directive
    var indexHtml = $compile(directive)($rootScope);

    // fire all the watches, so the scope expression will be evaluated
    $rootScope.$digest();

    expect(indexHtml.html()).toContain('Brainsphere');
  });


  it('rendered table of colletion data contains a link to the company detail page', function() {
    directive = angular.element('<index />');

    $rootScope.companies = mock_data;

    // Compile a piece of HTML containing the directive
    var indexHtml = $compile(directive)($rootScope);

    // fire all the watches, so the scope expression will be evaluated
    $rootScope.$digest();

    expect(indexHtml.html()).toContain('href="#/companies/1"');
  });


})