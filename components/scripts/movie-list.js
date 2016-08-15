"use strict";

// var controller = function($http) {
// 	this.message = "hi from controller";

// 	this.changeMessage = function() {
// 		this.message = "new message";
// 	}

// 	this.fetchMovies = function($http) {
// 		$http.get("../mock_data/mock_data.json")
// 			.then(function(response) {
// 				return response.data;
// 			});
// 	}

// 	this.onInit = function($http) {
// 		this.fetchMovies($http).then(function(movies) {
// 			this.movies = movies;
// 		})
// 	}
// }

angular.module("movies")

	.component("movieList", {
		templateUrl: "../templates/movie-list.component.html",
		controllerAs: "model",
		controller: function($http) {

			var model = this;

			model.message = "hi from controller";

			model.changeMessage = function() {
				model.message = "new message";
			}

			model.fetchMovies = function($http) {
				return $http.get("../mock_data/mock_data.json")
					.then(function(response) {
						return response.data;
					});
			}

			model.$onInit = function() {
				model.fetchMovies($http).then(function(movies) {
					model.movies = movies;
				})
			}

			model.upRate = function(movie) {
				movie.rating ++
			}		

			model.downRate = function(movie) {
				movie.rating --
			}		

		}
	});




















