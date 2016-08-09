import React from 'react';

const TodoInput = React.createClass({
	getInitialState: function() {
		return { todo: '' };
	},

	handleChange: function(e) {
		this.setState({
			todo: e.target.value
		});
	},

	handleAddClick: function() {
		this.props.addTodo(this.state.todo);
		this.setState({ todo: '' });
	},

	render: function() {
		return (
			<div className="todo-input">
				<input
					type="text"
					value={this.state.todo}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleAddClick}>
					Add Todo
				</button>
			</div>
		);
	}
});

export { TodoInput };
