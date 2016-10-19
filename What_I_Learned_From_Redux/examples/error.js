console.log('error.js loaded');

function add(a, b) {
	if(typeof a !== 'number' && typeof b !== 'number') {
		throw new Error('Invalid arguments passed. Expected numbers');
	}

	return a + b;
}

console.error('Uh Oh');
add('1', 'abc');
