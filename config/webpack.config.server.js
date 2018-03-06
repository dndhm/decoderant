const commonConfig = require('./webpack.config.common');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
	...commonConfig,
	name: 'server',
	target: 'node',
	entry: path.resolve(__dirname, '../src/server/index.js'),
	output: {
		path: path.resolve(__dirname, '../build/server'),
		filename: 'index.js',
	},
	node: {
		__filename: true,
		__dirname: true,
	},
	devtool: 'source-map',
	plugins: [
		new CopyWebpackPlugin([
			{
				from: 'src/client/reset.css',
				to: '../../build/public/',
			},
			{
				from: 'src/client/favicon.ico',
				to: '../../build/public/',
			},
		]),
	],
};
