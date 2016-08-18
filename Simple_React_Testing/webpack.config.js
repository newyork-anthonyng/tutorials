var webpack = require('webpack');

module.exports = {
	// path of the main file that will be compiled and output by Webpack.
	// For React apps, this will usually be the file that mounts the React components onto the DOM.
	entry: [
		'./src/index.jsx'
	],
	module: {
		loaders: [
			{
				// use babel to compile .js and .jsx files using es2015 and react/jsx into regular JavaScript
				// \.jsx? is a Regular Expression that will match any files with ".js" or ".jsx" in its filename
				test: /\.jsx?/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	},
	resolve: {
		// resolve extensions below, without specifying file extension in your code
		// ...instead of require('./abc.jsx');
		// ...we can write require('./abc');
		extensions: ['', '.js', '.jsx']
	},
	output: {
		// path of the file after it has been compiled
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	}
};
