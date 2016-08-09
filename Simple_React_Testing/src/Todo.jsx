import React from 'react';

const Todo = React.createClass({
	render: function() {
		const { todo } = this.props;

		return (
			<div className="todo">
				{todo}
			</div>
		);
	}
});

export { Todo };
