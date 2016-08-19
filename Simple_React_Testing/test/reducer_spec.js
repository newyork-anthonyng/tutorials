import { reducer } from '../src/reducer';
import { expect } from 'chai';

describe('reducer', () => {
	describe('ADD_TODO', () => {
		it('should add a new Todo item', () => {
			const initialState = ['Mow lawn'];
			const action = {
				type: 'ADD_TODO',
				data: 'Walk Dog'
			};
			const nextState = reducer(initialState, action);

			expect(nextState).to.deep.equal(['Mow lawn', 'Walk Dog']);
		});
	});

	describe('DELETE_TODO', () => {
		it('should delete a given Todo item', () => {
			const initialState = ['Mow lawn', 'Walk Dog'];
			const action = {
				type: 'DELETE_TODO',
				data: 'Mow lawn'
			};
			const nextState = reducer(initialState, action);

			expect(nextState).to.deep.equal(['Walk Dog']);
		});

		it('should do nothing if the Todo item to delete is not present', () => {
			const initialState = ['Mow lawn', 'Walk Dog'];
			const action = {
				type: 'DELETE_TODO',
				data: 'Write tutorial'
			};
			const nextState = reducer(initialState, action);

			expect(nextState).to.deep.equal(['Mow lawn', 'Walk Dog']);
		});
	});
});
