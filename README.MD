+ src
	- app.vue
	- index.js
- index.html
- webpack.config.js

4,安装其它依赖
01 模板解析依赖
npm i vue-template-compiler --save-dev
02 样式依赖
npm i style-loader css-loader --save-dev
03 文件加载依赖
npm i file-loader --save-dev
04 解析es6语法依赖
npm i -d babel-loader @babel/core @babel/preset-env webpack
05 安装html-webpack-plugin插件
npm i html-webpack-plugin --save-dev

5,配置webpack.config.js
6,安装热更新插件
npm i webpack-dev-server cross-env --save-dev
7,修改package中的命令，这里就用到上面安装的热更新插件
	{
	  "presets": [
	       ""@babel/preset-env""
	   ],
	   "plugins": [
	       "transform-vue-jsx"
	   ]
	}
8,
npm i babel-plugin-syntax-jsx --save
npm i babel-preset-env --save
npm i babel-plugin-transform-vue-jsx --save







