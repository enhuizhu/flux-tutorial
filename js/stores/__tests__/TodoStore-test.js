/**
* test TodoStore
**/
jest.dontMock("../TodoStore");
jest.dontMock("object-assign");

describe("TodoStore", function() {
	var TodoConstants = require("../../constant/TodoConstants"),
		AppDispatcher, TodoStore, callback;

	var actionTodoCreate = {
		source: "VIEW_ACTION",
		action:{
			actionType: TodoConstants.TODO_CREATE,
			text: "foo"
		},
	}


	var actionTodoDestroy = {
		source: "VIEW_ACTION",
		action:{
			actionType: TodoConstants.TODO_DESTROY,
			id: "test"
		}
	}	

	beforeEach(function() {
		AppDispatcher = require("../../dispatcher/AppDispatcher");
		TodoStore = require("../TodoStore");
		callback = AppDispatcher.register.mock.calls[0][0];
	});


	it("register a callback with dispatcher", function() {
		console.info("t1");
		expect(AppDispatcher.register.mock.calls.length).toBe(1);
	});

	it("initializes with no to-do items", function() {
		console.info("t2");
		var all = TodoStore.getAll();
		expect(all).toEqual({});
	});

	it("create a to-do item", function() {
		console.info("t3");
		callback(actionTodoCreate);
		var all = TodoStore.getAll();
		var keys = Object.keys(all);
		expect(keys.length).toBe(1);
		expect(all[keys[0]].text).toEqual("foo");
	});

});
