import React from 'react';
import { Todo } from './Todo';

const TodoList = React.createClass({
	render: function() {
		const { todos } = this.props;

		return (
			<div className="todo-list">
				<ul>
					{todos.map((todo, index) => (
						<li key={index}>
							<Todo todo={todo} />
						</li>
					))}
				</ul>
			</div>
		);
	}
});

export { TodoList };
