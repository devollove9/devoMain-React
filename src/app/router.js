/**
 * Created by devollove9 on 2017/10/5.
 */

import React , { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import intl from 'react-intl-universal';
import i18n from './library/i18n';
import { bindMethods , createList } from './util/commonUtils.js';
import PropTypes from 'prop-types'
import Home from './component/Home/Home';
import SignUp from './component/SignUp/SignUp';
import SignIn from './component/SignIn/SignIn';



import NotFound from './component/Error/NotFound';
//@i18n( locales )
class AppRouterMap extends Component {
    constructor( props ){
        super( props );
    }
    componentDidMount() {
    }
    render() {
        return (
            <Switch>
                <Route exact path = '/' component = {Home} />
                <Route path = '/index.html' component = {Home} />
                <Route path = '/signup' component = {SignUp} />
                <Route path = '/signin' component = {SignIn} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default AppRouterMap;
/*
 
* */