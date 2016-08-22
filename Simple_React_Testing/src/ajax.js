import axios from 'axios';

const utility = (function() {

	const makeAjax = function() {
		const myUrl = 'http://jsonplaceholder.typicode.com/posts/1';

		return axios.get(myUrl);
	};

	return {
		makeAjax: makeAjax
	};
})();

export { utility };
