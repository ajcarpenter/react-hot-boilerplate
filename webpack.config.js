var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['react-hot', 'babel'],
				include: path.join(__dirname, 'src')
			},
            { 
                test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, 
                loader: 'url-loader?limit=100000' 
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
		]
	}
};
