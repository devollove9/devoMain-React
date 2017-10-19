//import path from 'path';
//import webpack from 'webpack';
//import webpackConfig from './webpack.config';
//import webpackDevServer from 'webpack-dev-server';
//import express from 'express';
//import { middleware } from 'react-error-overlay';
//import koa from 'koa';
//import koa_router from 'koa-router';
//var app = new koa();
//var router = new koa_router();
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
const app = express();
var webpackDevMiddleware = require("webpack-dev-middleware");
let compiler = webpack( webpackConfig );

app.use(webpackDevMiddleware(compiler, {

    noInfo: false, 
    publicPath: webpackConfig.output.publicPath 
}));

var webpackHotMiddleware = require('webpack-hot-middleware');
app.use(webpackHotMiddleware(compiler));


app.get('*', function(req, res) {

    res.sendFile(path.resolve(__dirname, './index.html')); //
});

app.listen(3100, function(err) {

    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:3100');
});
