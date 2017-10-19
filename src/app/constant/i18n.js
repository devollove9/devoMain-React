/**
 * Created by devollove9 on 2017/10/6.
 */
const locales = {
    "zh-CN": {
        "SIMPLE": "简单的句子",
        //"HELLO": "你好, {name}。欢迎来到{where}!",
        "SALE_START": "拍卖将在{start, date}开始",
        "SALE_END": "拍卖将在{end, date, full}结束",
        "COUPON": "优惠卷将在{expires, time, medium}过期",
        "TIME": "时间是{theTime, time}",
        "SALE_PRICE": "售价{price, number, CNY}",
        "PHOTO": "你有{photoNum, number}张照片",
        "MESSAGE_NOT_IN_COMPONENT": "react-intl-universal可以在非React.Component的js文件进行国际化"
    },
    "en-US": {
        "SIMPLE": "Simple Sentence",
        //"HELLO": "Hello, {name}. Welcome to {where}!",
        "SALE_START": "Sale begins {start, date}",
        "SALE_END": "Sale ends {end, date, long}",
        "COUPON": "Coupon expires at {expires, time, medium}",
        "SALE_PRICE": "The price is {price, number, USD}",
        "PHOTO": "You have {photoNum, plural, =0 {no photos.} =1 {one photo.} other {# photos.}}",
        "MESSAGE_NOT_IN_COMPONENT": "react-intl-universal is able to internationalize message not in React.Component"
    }
};

export default locales;