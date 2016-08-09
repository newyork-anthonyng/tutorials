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
					ref="todoInputField"
					type="text"
					value={this.state.todo}
					onChange={this.handleChange}
				/>
				<button
					ref="todoInputButton"
					onClick={this.handleAddClick}
				>
					Add Todo
				</button>
			</div>
		);
	}
});

export { TodoInput };
