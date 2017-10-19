/**
 * Created by devollove9 on 2017/10/2.
 */
var request = require('./request');
var md5 = require('md5');

exports.byUsernname = function byUsernname(username, password) {
    let body = {};
    body.username = username;
    if (password) body.password = md5(password);
    return request.post('/user/register',{},body);
};

exports.byEmail = function byEmail(email, password) {
    let body = {};
    body.email = email;
    if (password) body.password = md5(password);
    return request.post('/request/email',{},body);
};

exports.byPhone = function byPhone(phone, password) {
    let body = {};
    body.phone = phone;
    if (password) body.password = md5(password);
    return request.post('/request/phone',{},body);
};

exports.activateEmail = function activateEmail(email, code) {
    let body = {};
    body.email = email;
    body.code = code;
    return request.put('/request/email',{},body);
};

exports.activatePhone = function activatePhone(phone, code) {
    let body = {};
    body.phone = phone;
    body.code = code;
    return request.put('/request/phone',{},body);
};
