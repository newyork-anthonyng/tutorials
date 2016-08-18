import React from 'react';
import ReactDOM from 'react-dom';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

const App = React.createClass({
	getInitialState: function() {
		return { todos: [] }
	},

	componentDidMount: function() {
		const todos = [
			'mow lawn',
			'walk dog'
		];

		this.setState({
			todos: todos
		});
	},

	addTodo: function(newTodo) {
		const newTodos = [
			...this.state.todos,
			newTodo
		];

		this.setState({
			todos: newTodos
		});
	},

	render: function() {
		return (
			<div className="app">
				<TodoInput
					addTodo={this.addTodo}
				/>
				<TodoList
					todos={this.state.todos}
				/>
			</div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
