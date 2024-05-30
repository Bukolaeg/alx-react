const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	  entry: './src/index.js',
	  output: {
		      filename: 'bundle.js',
		      path: path.resolve(__dirname, 'dist'),
		    },
	  module: {
		      rules: [
			            {
					            test: /\.js$/,
					            exclude: /node_modules/,
					            use: 'babel-loader',
					          },
			            {
					            test: /\.css$/,
					            use: ['style-loader', 'css-loader'],
					          },
			            {
					            test: /\.(png|jpg|gif)$/,
					            use: [
							              {
									                  loader: 'file-loader',
									                  options: {
												                name: '[path][name].[ext]',
												              },
									                },
							            ],
					          },
			          ],
		    },
	  plugins: [
		      new HtmlWebpackPlugin({
			            template: './src/index.html',
			          }),
		    ],
};

