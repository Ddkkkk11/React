//引入一个包
const path=require('path');
//引入html文件
const HtmlWebpackPlugin=require('html-webpack-plugin');
//引入clean插件
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
//webpack所有的配置信息都用改写在module.exports中
module.exports={
    //指定入口文件
    entry:'./src/index.ts',
    mode: "development",
    //指定文件所在目录
    output: {
        //指定打包后的路径
        path: path.resolve(__dirname,'dist'),
        //打包后文件的名称
        filename: "bundle.js"
    },
    //指定webpack打包时要使用的模块
    module: {
        //指定要加载的规则
        rules: [{
            //test指定规则生效的文件
            test:/\.ts$/,
            //要使用的loader怎么去处理ts文件
            use: 'ts-loader',
            //要排除的文件
            exclude: /node-modules/

        }]
    },
    //配置webpack插件
    plugins: [
        new HtmlWebpackPlugin({
            // title:'我的页面'
            template: "./src/index.html"
        }),
    ],
    //用来设置模块的
    resolve: {
        extensions: ['.ts','.js']
    }


};