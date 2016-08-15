angular.module("movies", ["ngRoute"])
	.config(function($routeProvider) {
		$routeProvider
			.when("/list", { template: "<movie-list></movie-list>" })
			.when("/about", { template: "about"})
			.otherwise({ redirectTo: "/list"})
	});