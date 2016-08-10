'use strict';

angular.module("todoListApp")
	.controller("mainCtrl", function($scope, dataService) {
		$scope.addToDo = function() {
			var todo = {"name": "This is a new todo"};
			$scope.todos.unshift(todo);
			console.log($scope.todos)
		};

		dataService.getToDos(function(response) {
			console.log(response.data);
			$scope.todos = response.data;
		});

		$scope.deleteToDo = function(toDo) {
			dataService.deleteToDo(toDo);
		};

		$scope.saveToDo = function(toDo) {
			dataService.saveToDo(toDo);
		};		

	})