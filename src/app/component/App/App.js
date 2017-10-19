/**
 * Created by devollove9 on 2017/9/30.
 */
import React, { Component } from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import intl from 'react-intl-universal'
import * as localeActionCreators from '../../action/localeCreator'
//import createHistory from 'history/createBrowserHistory'
//const history = createHistory()
//const initialState = history.location

import { bindMethods } from '../../util/commonUtils'
import i18n from '../../library/i18n'
import Header from '../Header/Header'
import AppRouterMap from '../../router'
//import Footer from '../Footer/Footer';

import { loadStyle } from '../../library'
import appSass from '../../../sass/app.scss';
import styles from './App.scss'


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
// Map Redux state to component props
function mapStateToProps(state) {
    return {
        ...state.locale
    }
}

let newMapD = dispatch => bindActionCreators( localeActionCreators , dispatch );

const proptypes = {
    activeLocale:PropTypes.string.isRequired,
    locales:PropTypes.object.isRequired,
};

// Load Page Styles
@loadStyle(appSass)
@loadStyle(styles)
@i18n( locales )
@connect(  mapStateToProps , newMapD )
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            account: null,
            activeLocale: 'en-US',            
            displayModal: false,
            initDone: false,
            isLogged: false,
            isMessage: null
        };
    }
    componentDidMount() {
        
    }
    componentWillMount() {
        this.loadLocales();
    }
    loadLocales(){
        let locale = localStorage.getItem('defaultLocale');

        if( !locale ) {
            locale = navigator.language || navigator.userLanguage;
            if ( !locale.startsWith( 'zh' ) && !locale.startsWith( 'en' ) ) locale = 'en-US';
            locale = locale.startsWith('zh') ? 'zh-Hans-CN' : 'en-US';
        }
        //this.props.onUpdateLocale( locales2 );
        let locales = this.props.locales;
        let currentLocale = this.props.activeLocale || 'en-US';
        intl.init({
            currentLocale: currentLocale,
            locales
        }).then(() => {
            this.setState({
                initDone: true,
                activeLocale:currentLocale
            });
        });
    }
    render() {
        return (
            <Router>
                <div className='App'>
                    <Route component={Header} />
                    <div className="AppRouterMap" >
                        <AppRouterMap />
                    </div>
                </div>
            </Router>
        );
    }
}
App.propTypes = proptypes;
export default App;
