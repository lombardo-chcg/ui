angular.module("todoListApp", [])
	.controller("mainCtrl", function($scope) {
		$scope.learningNgChange = function() {
			console.log("Ng Change");
		}

		$scope.todos = [
			{"name": "eat a taco"},
			{"name": "talk to paco"},
			{"name": "listen to jaco"},
			{"name": "think of more rhymes"},
		]
	});