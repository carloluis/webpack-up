const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
	DIST: path.resolve(__dirname, 'dist'),
	SRC: path.resolve(__dirname, 'src')
};

module.exports = {
	entry: path.join(paths.SRC, 'index.js'),
	output: {
		path: paths.DIST,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								camelCase: 'dashes'
							}
						},
						{
							loader: 'sass-loader'
						}
					]
				})
			},
			{
				test: /\.(png|jpg|svg|otf|woff|woff2|eot|ttf)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(paths.SRC, 'index.html')
		}),
		new ExtractTextPlugin('styles.bundle.css')
	],
	resolve: {
		extensions: ['.js']
	},
	devServer: {
		contentBase: paths.SRC
	}
};
