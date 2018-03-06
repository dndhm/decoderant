const commonConfig = require('./webpack.config.common');
const path = require('path');
const webpack = require('webpack');

const uglify = process.env.NODE_ENV === 'production'
	? [
		new webpack.optimize.UglifyJsPlugin({
			uglifyOptions: {
				compress: true,
				mangle: true,
				parallel: true,
			},
		}),
	]
	: [];

module.exports = {
	...commonConfig,
	name: 'client',
	target: 'web',
	entry: path.resolve(__dirname, '../src/client/index.js'),
	output: {
		path: path.resolve(__dirname, '../build/public'),
		filename: 'client.js',
	},
	devtool: 'source-map',
	plugins: [
		...commonConfig.plugins,
		...uglify,
	],
};
