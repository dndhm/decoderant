const webpack = require('webpack');

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					plugins: [
						require.resolve('babel-plugin-transform-es2015-destructuring'),
						require.resolve('babel-plugin-transform-object-rest-spread'),
					],
					presets: [
						require.resolve('babel-preset-env'),
						require.resolve('babel-preset-react')
					],
				},
			},
		],
	},

	resolve: {
		extensions: ['.js', '.json'],
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
		}),
	],
};
