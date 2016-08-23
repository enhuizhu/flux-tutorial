var react = require("react"),
	TodoActions = require("../actions/TodoActions"),
	TodoTextInput = require("./TodoTextInput.react");

var Header = react.createClass({
	render: function() {
		return (
			<header id="header">
				<h1>todos</h1>
				<TodoTextInput id="new-todo" placeholder="what needs to be done?" onSave={this._onSave}/>
			</header>
		);
	},

	_onSave: function(text) {
		TodoActions.create(text);
	}
});

module.exports = Header;
