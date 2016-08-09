import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithTag,
	Simulate
} from 'react-addons-test-utils';
import { TodoInput } from '../src/TodoInput';
import { expect } from 'chai';

describe('TodoInput', () => {
	it('should render an input field and button', () => {
		const component = renderIntoDocument(
			<TodoInput />
		);
		const inputField = findRenderedDOMComponentWithTag(component, 'input');
		const button = findRenderedDOMComponentWithTag(component, 'button');

		expect(inputField).to.be.ok;
		expect(button).to.be.ok;
	});

	it('should pass todo text with addTodo callback', () => {
		let addTodoInvoked = false;
		const addTodo = (todo) => { addTodoInvoked = todo };
		const component = renderIntoDocument(
			<TodoInput
				addTodo={addTodo}
			/>
		);
		const inputField = component.refs.todoInputField;
		const button = component.refs.todoInputButton;

		inputField.value = 'Paint room';
		Simulate.change(inputField);
		Simulate.click(button);

		expect(addTodoInvoked).to.equal('Paint room');
	});
});
