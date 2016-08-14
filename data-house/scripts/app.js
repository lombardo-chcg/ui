angular.module("DataHouseApp", ['ui.router'])

	.config(function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/companies');

		$stateProvider
			.state('index', {
				url: '/companies',
				templateUrl: 'templates/directives/index.html'
			})

			.state('show', {
				url: '/companies/:company_id',
				templateUrl: 'templates/directives/show.html',
				controller: "ShowController"
			})

	});