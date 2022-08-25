const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
module.exports={
    devServer: {
        hot: true,
        open:true
    },
    mode:'development',
    devtool:'cheap-module-source-map', // 定位错误
    // 防止更新后state重置
    plugins: [
        new ReactRefreshWebpackPlugin(),
    ],
}