const path=require('path');
const ExtractText=require('extract-text-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'js/[name].[hash:8].js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/',
    },
    mode:'production',
    devServer:{
        contentBase:'./view'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractText.extract({
                    fallback:'style-loader',
                    use:'css-loader',
                    publicPath:"css"
                })
            }
        ]
    },
    plugins:[
        new ExtractText({
            filename:path.posix.join('src','css/[name].[contenthash].css'),
            allChunks:true
        }),
        new HtmlWebpackPlugin({
            title:'index',
            // favicon:'./favicon.png',
            filename:'view/index.html',
            template:'view/index.html',
            hash:true,
            chunks:['/src/index.js']
        })
    ]
}