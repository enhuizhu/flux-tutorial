/**
* TodoActions
**/
var AppDispatcher = require("../dispatcher/AppDispatcher"),
	TodoConstrants = require("../constant/TodoConstants"),
	TodoActions = {
		create: function(text){
			AppDispatcher.handleViewAction({
				actionType: TodoConstrants.TODO_CREATE,
				text: text
			});
		},


		destory: function(id) {
			AppDispatcher.handleViewAction({
				actionType:TodoConstrants.TODO_DESTROY,
				id: id
			})
		}
	};

module.exports = TodoActions;
