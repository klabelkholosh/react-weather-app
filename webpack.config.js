var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

var config = {
	entry: "./app/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index_bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: "babel-loader" },
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			{ test: /\.(png|jpg|gif|svg)$/, use: "file-loader" }
		]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "app/index.html"
		})
	]
};

//obtains NODE_ENV setting from the package.json 'build' script
//below NODE_ENV setting sets it for the eventual compiled code.
if (process.env.NODE_ENV === 'production') {
	config.plugins.push(
		new webpack.DefinePlugin({
			'process.env' : {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	)
}

//make it available
module.exports = config;
