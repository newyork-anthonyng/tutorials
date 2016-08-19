const initialState = [];

const reducer = (state = initialState, action) => {
	let newTodos;

	switch(action.type) {
		case 'ADD_TODO':
			newTodos = state.slice();
			newTodos.push(action.data);
			return newTodos;
		case 'DELETE_TODO':
			newTodos = state.filter((item) => {
				return item !== action.data;
			});
			return newTodos;
		default:
			return state;
	};
};

export { reducer };
