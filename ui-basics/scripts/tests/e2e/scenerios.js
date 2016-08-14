//how to run these tests
// start server on localhost 8k
// start selenium server webdriver-manager start
// protractor protractor.conf.js

"use strict";

describe('todoListApp', function() {

	describe('main page', function() {
		beforeEach(function() {
			browser.get('http://localhost:8000/')
		});

		it("should have a list of todos based on the API collection", function() {
			var list = element.all(by.repeater('todo in todos'));
			expect(list.count()).toEqual(4);
		});

		it("should have the correct title and first todo", function() {
			var firstToDo = element(by.binding("todo.name"));
			expect(firstToDo.getText()).toEqual("eat a taco");
		});

		it("should be able to add new items to the to do list", function() {
			var addToDoButton = element(by.id("add-todo"));
			addToDoButton.click();
			var list = element.all(by.repeater('todo in todos'));
			expect(list.count()).toEqual(5);			
		});

		it("allows a user to enter a to do", function() {
			var firstToDo = element(by.binding("todo.name"));
			firstToDo.click();

			var inputBox = element(by.model("todo.name"));
			var pageTitle = element(by.id("page-title"));
			inputBox.clear().sendKeys("make a new todo");
			pageTitle.click();

			var newfirstToDo = element(by.binding("todo.name")); 
			expect(newfirstToDo.getText()).toEqual("make a new todo");
		});		


	})

})