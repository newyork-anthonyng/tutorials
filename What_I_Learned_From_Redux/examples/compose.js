console.log('compose.js loaded');

function compose(...funcs) {
	if (funcs.length === 0) {
		return arg => arg
	}

	if (funcs.length === 1) {
		return funcs[0]
	}

	const last = funcs[funcs.length - 1]
	const rest = funcs.slice(0, -1)
	return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args))
}

function square(num) {
	return num * num;
}

function double(num) {
	return num * 2;
}

function squareThenDouble(num) {
	return compose(double, square)(num);
}

console.log(squareThenDouble(7));
