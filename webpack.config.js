const path = require('path');

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
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(paths.SRC, 'index.html')
		})
	],
	devServer: {
		contentBase: paths.SRC
	}
};
