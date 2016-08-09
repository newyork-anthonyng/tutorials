import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';
import { Todo } from '../src/Todo';
import { expect } from 'chai';

describe('Todo', () => {
	it('should render a div with "todo" class', () => {
		const todo = 'Walk dog';
		const component = renderIntoDocument(
			<Todo />
		);
		const todoEle = findRenderedDOMComponentWithClass(component, 'todo');

		expect(todo).to.be.ok;
	});

	it('should render a div with the todo text', () => {
		const todo = 'Walk dog';
		const component = renderIntoDocument(
			<Todo
				todo={todo}
			/>
		);
		const todoEle = findRenderedDOMComponentWithClass(component, 'todo');
		const todoText = todoEle.textContent;

		expect(todoText).to.equal('Walk dog');
	});
});
