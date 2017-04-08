const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const srcDir = resolve(__dirname, '../src')

module.exports = {
	entry: `${srcDir}/index.js`,
	output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
		devServer: {
    historyApiFallback: true
  },
	module:{
		rules:[{
			enforce: 'pre',
			test: /\.js$/,
			loader: 'standard-loader',
			exclude: /node_modules/
		}, {
			 test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
		},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules,localIdentName=[hash:base64:6]-[name]-[local]',
				exclude: /node_modules/
			}]
	},
	resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: `${srcDir}/index.html`
		}
		),
		new DashboardPlugin()
	]

}
