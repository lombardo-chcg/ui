angular.module("todoListApp", [])
	.controller("mainCtrl", function($scope) {
		$scope.helloWorld = function() {
			console.log("Hello world mainCtrl");
		}

		$scope.todos = [
			{"name": "eat a taco"},
			{"name": "talk to paco"},
			{"name": "listen to jaco"},
			{"name": "think of more rhymes"},
		]
	});