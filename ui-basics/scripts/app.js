angular.module("todoListApp", [])
	.controller("mainCtrl", function($scope, dataService) {
		$scope.addToDo = function() {
			var todo = {"name": "This is a new todo"};
			$scope.todos.push(todo);
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

	}).service("dataService", function($http) {
		
		this.getToDos = function(callback) {
			$http.get("http://localhost:9090/scripts/mock/todos.json")
			.then(callback)
		};

		this.deleteToDo = function(toDo, $index) {
			console.log(toDo.name, "has been deleted");
			$scope.todos.splice($index, 1);
		};

		this.saveToDo = function(toDo) {
			console.log(toDo.name, "has been saved");
		};

	});