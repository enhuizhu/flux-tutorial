var react = require("react");

var MainSection = react.createClass({
	render: function() {
		var allTodos = this.props.allTodos,
			todos = [];

		for(var key in allTodos) {
			todos.push(<TodoItem key={key} todo={allTodos[key]}/>);
		}	

	}
});

module.exports = MainSection;