"use strict";

angular.module("movies")
	.component("movieList", {
		templateUrl: "../templates/movie-list.component.html",
		controllerAs: "model",
		controller: function() {
			this.message = "hi from controller";

			this.changeMessage = function() {
				this.message = "new message";
			}
		}
	});