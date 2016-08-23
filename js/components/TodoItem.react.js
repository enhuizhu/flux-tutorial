var react = require("react"),
	ToDoActions = require("../actions/TodoActions"),
	ToDoTextInput = require("./ToDoTextInput.react");

var TodoItem = React.createClass({

	propTypes: {
		todo: react.PropTypes.object.isRequired
	},

	render: function() {
		var todo = this.props.todo;

		return (
			<li key={todo.id}>
				<label>
					{todo.text}
				</label>
				<button className="destroy" onClick={this._onDestroyClick}/>
			</li>
		);
	},

	_onDestroyClick: function() {
		ToDoActions.destroy(this.props.todo.id);
	}

	module.exports = TodoItem;
});
