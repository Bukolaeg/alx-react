const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	  entry: './src/index.js',
	  output: {
		      filename: 'bundle.js',
		      path: path.resolve(__dirname, 'dist'),
		      clean: true,
		    },
	  mode: 'development',
	  devServer: {
		      static: {
			            directory: path.join(__dirname, 'dist'),
			          },
		      compress: true,
		      port: 9000,
		      hot: true,
		      open: true,
		    },
	  module: {
		      rules: [
			            {
					            test: /\.js$/,
					            exclude: /node_modules/,
					            use: {
							              loader: 'babel-loader',
							              options: {
									                  presets: ['@babel/preset-env'],
									                },
							            },
					          },
			            {
					            test: /\.css$/,
					            use: ['style-loader', 'css-loader'],
					          },
			            {
					            test: /\.(png|jpg|gif)$/,
					            use: [
							              {
									                  loader: 'image-webpack-loader',
									                  options: {
												                bypassOnDebug: true,
												                disable: true,
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

