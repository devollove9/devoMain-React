/**
 * Created by devollove9 on 6/11/2017.
 */
var path = require('path')
var webpack = require('webpack')
var yargs = require( 'yargs' )
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolvePath(relPath) {
    return path.resolve(__dirname, relPath);
}
const root_path = path.resolve( __dirname );
const app_path = path.resolve( root_path, 'src');

// Check production or debug mode
const DEBUG = ! yargs.argv.production;
const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';
console.log( 'Current deploy mode：', isProduction ? 'production' : 'development' );

function getAbsPath(relPath) {
    return path.resolve(__dirname, relPath);
}

// Define loader
const style_loader = 'style-loader/useable';
//const style_loader = 'style-loader';
const css_loader = DEBUG ? 'css-loader' : 'css-loader';
//const css_loader = 'css-loader';
let app = [
    './src/app/polyfill.js',
    './src/app/app.js'
]

let plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
    }),
    new webpack.DefinePlugin({
        // 定义全局变量
        'process.env':{
            'NODE_ENV': JSON.stringify(nodeEnv)
        }
    })
]
if ( isProduction ) {
    plugins.push(
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: false
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            comments: false,
            ie8: true
        })
    )
} else {
    app.unshift(  'webpack-hot-middleware/client' )
    plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = {
    devtool: isProduction ? 'cheap-module-eval-source-map' :  'inline-source-map',//打包构建信息
    entry: {
        vendor: [ 'react', 'react-dom' ],
        app: app
    },

    output: {
        filename: '[name].bundle.js',
        path: getAbsPath('build'),
        publicPath: isProduction ? '/build/' : '/js/' ,
        chunkFilename: '[name].js'
    },

    module: {

        rules: [
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader',
                include: app_path,
                exclude: [/node_modules/, /web_modules/],

            },
            {
                test: /\.css$/,
                loader:`${style_loader}!${css_loader}!postcss-loader`
            },
            {
                test: /\.scss$/,
                use: isProduction ? ExtractTextPlugin.extract({
                    fallback:`${style_loader}`,
                    use:`${css_loader}!postcss-loader!sass-loader?` +
                    `includePaths[]=${encodeURIComponent(path.resolve(__dirname, './src/sass'))}&` +
                    `includePaths[]=${encodeURIComponent(path.resolve(__dirname, './node_modules/foundation-sites/scss'))}`
                }):[
                    //{ loader: `${style_loader}` },
                    { loader: 'style-loader/useable' },
                    { loader: `${css_loader}` },
                    { loader: 'postcss-loader' },
                    { 
                        loader: 'sass-loader',
                        options:{
                            includePaths: [
                                path.resolve( __dirname, './node_modules/foundation-sites/scss' ),
                                path.resolve( __dirname, './src/sass' )
                            ]
                        }
                    }
                ]/*
                    `${style_loader}!${css_loader}!postcss-loader!sass-loader?` +
                    `includePaths[]=${encodeURIComponent(path.resolve(__dirname, './src/sass'))}&` +
                    `includePaths[]=${encodeURIComponent(path.resolve(__dirname, './node_modules/foundation-sites/scss'))}`*/
                
            },
            {
                test: /\.gif/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
            },
            {
                test: /\.jpg/,
                loader: 'url-loader?limit=10000&mimetype=image/jpg'
            },
            {
                test: /\.png/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
            },
            {
                test: /\.svg/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    } ,

    resolve:{
        //extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        alias: {
            //sass: path.resolve(__dirname, 'public/static/sass/'),
            //css: path.resolve(__dirname, 'public/static/css/') //css目录别名
        }
    },

    plugins: plugins,
    externals: {
        //'react-cookie': 'reactCookie',
        //'jquery': 'jQuery',
        //'lodash': '_',
        //'q': 'Q',
        //'config':'config.js'
        //'react': 'React',
        //'react-dom': 'ReactDOM',
        //'react-router': 'ReactRouter',
        //'react-intl': 'ReactIntl',
        //'react-modal': 'ReactModal',
        //'flux': 'Flux',
        //'immutable': 'Immutable',
        //'google-map': 'google',
        //'new-relic': 'NREUM',
    }
};
/*
 import path from 'path';
 import webpack, { DefinePlugin } from 'webpack';
 import autoprefixer from 'autoprefixer';
 //import htmlwebpackPlugin from 'html-webpack-plugin';
 import extractTextPlugin from 'extract-text-webpack-plugin';



 // Define file path
 function resolvePath(relPath) {
 return path.resolve(__dirname, relPath);
 }
 const root_path = path.resolve( __dirname );
 const app_path = path.resolve( root_path, 'src');
 const build_path = path.resolve( root_path, 'build');
 const node_modules_path = resolvePath('node_modules');
 const react_path = resolvePath('react/react.js');

 // Check production or debug mode
 const DEBUG = ! yargs.argv.production;
 const nodeEnv = process.env.NODE_ENV || 'development';
 const isProduction = nodeEnv === 'production';
 console.log( 'Current deploy mode：', isProduction ? 'production' : 'development' );

 // Define loader
 const style_loader = 'style-loader/useable';
 const css_loader = DEBUG ? 'css-loader' : 'css-loader?minimize';
 let vendorList = [
 'react',
 'react-dom'
 ];
 var plugins = [
 new webpack.optimize.CommonsChunkPlugin({
 name: 'vendor'
 }),
 new webpack.DefinePlugin({
 'process.env':{
 'NODE_ENV': JSON.stringify(nodeEnv)
 }
 })
 /*new webpack.optimize.UglifyJsPlugin({
 compress: {
 warnings: false
 }
 })*/
/*
 ]

 let app_entry = [ './src/app/app.js' ];
 if ( isProduction ) {
 plugins.push(
 new extractTextPlugin({
 filename: 'styles.css'
 }),
 new webpack.LoaderOptionsPlugin({
 minimize: true,
 debug: false
 }),
 new webpack.optimize.UglifyJsPlugin({
 sourceMap: true,
 comments: false,
 ie8: true
 })
 )
 } else {
 //app_entry.unshift( 'eventsource-polyfill', `webpack-dev-server/client?http://localhost:3100`, 'webpack/hot/only-dev-server');
 //app_entry.unshift( 'eventsource-polyfill' , 'webpack-hot-middleware/client' );
 plugins.push(
 new webpack.HotModuleReplacementPlugin(),
 new webpack.NamedModulesPlugin(),
 new webpack.NoEmitOnErrorsPlugin()
 )
 }
 const appConfig = {
 //context: path.resolve(__dirname, 'src'),
 entry: {
 app: app_entry,
 //polyfill: './src/app/polyfill.js'
 vendor:vendorList
 },
 devtool: 'cheap-module-eval-source-map',
 output: {
 path: path.join(__dirname, 'build/js'),
 publicPath: isProduction? './build':'./build',
 //sourcePrefix: '  '
 filename: '[name].bundle.js',
 chunkFilename: '[name].bundle.js',
 sourceMapFilename: '[file].map'
 },
 plugins: plugins,

 resolve: {
 extensions: [ '.webpack.js', '.web.js', '.js' ]
 },

 module: {
 loaders: [
 {
 test: /\.js[x]?$/,
 loader: 'babel-loader',
 include: app_path,
 exclude: [/node_modules/, /web_modules/],

 },
 {
 test: /\.css$/,
 loader: `${style_loader}!${css_loader}!postcss-loader`
 },
 {
 test: /\.scss$/,
 loader: `${style_loader}!${css_loader}!postcss-loader!sass-loader?` +
 `includePaths[]=${encodeURIComponent(path.resolve(__dirname, './src/sass'))}&` +
 `includePaths[]=${encodeURIComponent(path.resolve(__dirname, './node_modules/foundation-sites/scss'))}`
 },
 {
 test: /\.gif/,
 loader: 'url-loader?limit=10000&mimetype=image/gif'
 },
 {
 test: /\.jpg/,
 loader: 'url-loader?limit=10000&mimetype=image/jpg'
 },
 {
 test: /\.png/,
 loader: 'url-loader?limit=10000&mimetype=image/png'
 },
 {
 test: /\.svg/,
 loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
 }
 ]
 }
 };
 export default appConfig;*/