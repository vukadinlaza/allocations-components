const path = require('path')

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, './src/index.ts'),
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './dist'),
		libraryTarget: 'umd',
		clean: true,
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.jsx', '.css', '.scss'],
	},
	externals: {
		react: 'react',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				use: ['ts-loader'],
				exclude: /node_modules/,
			},
		],
	},
}
