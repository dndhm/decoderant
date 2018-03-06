const clientConfig = require('./webpack.config.client');
const webpack = require('webpack');

module.exports = {
	...clientConfig,
	entry: [
		'babel-polyfill',
		'webpack/hot/only-dev-server',
		'webpack-dev-server/client?http://localhost:8082',
		clientConfig.entry,
	],
	output: {
		...clientConfig.output,
		publicPath: 'http://localhost:8082/',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
};
