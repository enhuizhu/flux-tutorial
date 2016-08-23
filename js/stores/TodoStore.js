var Appdispatcher = require("../dispatcher/AppDispatcher"),
	EventEmiter = require("events").EventEmitter,
	TodoConstants = require("../constant/TodoConstants"),
	assign = require("object-assign"),
	CHANGE_EVENT = 'change',
	_todos = {};

function create(text) {
	var id = Date.now();
	_todos[id] = {
		id: id,
		compelete: false,
		text: text
	};
}


function destory(id) {
	delete _todos[id];
}

var TodoStore = assign({}, EventEmiter.prototype, {
	getAll: function() {
		return _todos;
	}, 

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	dispatcherIndex: Appdispatcher.register(function(payload) {
		
		console.info("--- value of payload ---", payload);

		var action = payload.action;
		var text;

		switch(action.actionType) {
			case TodoConstants.TODO_CREATE:
				text = action.text.trim();

				if (text !== '') {
					create(text);
					TodoStore.emitChange();
				}

				break;

			case TodoConstants.TODO_DESTROY:
				destory(action.id);
				TodoStore.emitChange();
				break;
		}

		return true;
	})
});


module.exports = TodoStore;

