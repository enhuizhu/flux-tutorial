var Footer = require('./Footer.react'),
	Header = require('./Header.react'),
	MainSection = require('./MainSection.react'),
	react = require('react'),
	todoStore = require('../stores/TodoStore');

function getTodoState() {
	return {
		allTodos: TodoStore.getAll()
	};
}

var TodoApp = React.createClass({
	getInitialState: function() {
		return getTodoState();
	},

	componentDidMount: function() {
		TodoStore.addChangeListener(this._onChange);
	},

	componentWillUnMount: function() {
		TodoStore.removeChangeListener(this._onChange);
	},

	render: function() {
		return (
			<div>
				<Header/>
				<MainSection allTodos={this.state.allTodos} areAllCompelete={this.state.areAllCompelete}/>
				<Footer allTodos={this.state.allTodos}/>
			</div>
		);
	},

	_onChange: function() {
		this.setState(getTodoState());
	}
});


module.exports = TodoApp;