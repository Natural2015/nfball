const {
	VueLoaderPlugin
} = require('vue-loader');

module.exports = {
	module: {
		rules: [{
				test: /\.vue$/,
				use: [
					'vue-loader'
				]
			},
			// 它会应用到普通的 `.css` 文件
			// 以及 `.vue` 文件中的 `<style>` 块
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.js$/,
				loader: 'babel-loader', 
				exclude: /node_modules/
			}
		]
	},
	/*为.vue文件配置加载器，只支持原生js*/
	plugins: [
		new VueLoaderPlugin()
	],
	mode: 'development'
}
