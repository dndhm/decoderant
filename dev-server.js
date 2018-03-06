var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
const devConfig = require('./config/webpack.config.dev');

var server = new WebpackDevServer(webpack(devConfig), {
	publicPath: devConfig.output.publicPath,
	hot: true,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000,
	},
	stats: {
		colors: true,
	},
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
});

console.log('🤖  ~ Starting dev server on :8082');

server.listen(8082, 'localhost', () => { });
