'use strict';

angular.module("todoListApp")
.service("dataService", function($http) {
		
		this.getToDos = function(callback) {
			$http.get("http://localhost:9090/scripts/mock/todos.json")
			.then(callback)
		};

		this.deleteToDo = function(toDo, $index) {
			console.log(toDo.name, "has been deleted");
			$scope.todos.splice($index, 1);
		};

		this.saveToDos = function(toDo) {
			console.log(toDo.name, "has been saved");
		};

	});