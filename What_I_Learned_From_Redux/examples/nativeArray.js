console.log('nativeArray.js loaded');

function custom(array) {
	let newArray = [];

	for(var i = 0; i < array.length; i++) {
		if(array[i]) {
			newArray.push(array[i]);
		}
	}

	return newArray;
}

function native(array) {
	return array.filter((current) => current);
}

const myArray = [false, true, true, false, false, false, true, false];
console.log(custom(myArray));
console.log(native(myArray));
