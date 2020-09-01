const path=require('path');
const MiniPlugin=require('mini-css-extract-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./js/index.js',
    output:{
        filename:'js/[name].js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/',
    },
    mode:'production',
    devServer:{
        contentBase:'./dist/view'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                        loader:MiniPlugin.loader,
                        options:{
                            publicPath:'css/'
                        }
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new MiniPlugin({
            filename:'css/[name].css',
            chunkFilename:'[id].css'
        }),
        new HtmlWebpackPlugin({
            title:'index',
            // favicon:'./favicon.png',
            filename:'view/index.html',
            template:'view/index.html',
            hash:true,
            chunks:['/js/index.js']
        })
    ]
}