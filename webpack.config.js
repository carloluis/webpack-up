const path = require('path');

const paths = {
	DIST: path.resolve(__dirname, 'dist'),
	SRC: path.resolve(__dirname, 'src')
};

module.exports = {
	entry: path.join(paths.SRC, 'index.js'),
	output: {
		path: paths.DIST,
		filename: 'bundle.js'
	}
};
