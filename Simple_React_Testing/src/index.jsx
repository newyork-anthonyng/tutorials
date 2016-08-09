import React from 'react';
import ReactDOM from 'react-dom';
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

	render: function() {
		return (
			<TodoList
				todos={this.state.todos}
			/>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
