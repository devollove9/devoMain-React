/**
 * Created by devollove9 on 2017/10/1.
 */
import React from 'react';
import ReactIntl, { FormattedMessage} from 'react-intl';
import i18n from '../../library/i18n.js';
import {Link} from 'react-router';
import loadStyle from '../../library/loadStyle.js';
import styles from './Header.scss';
import { bindMethods } from '../../util/commonUtils.js';
//import Navigation from '../../component/Navigation/Navigation.js';
import foundation from '../../library/foundation.js';
import authenticationCreator from '../../action/authenticationCreator.js';
import registerCreator from '../../action/registerCreator.js';
import routerNavigation from '../../library/routerNavigation.js';
import routerState from '../../library/routerState.js';
import localeCreator from '../../action/localeCreator.js';
import { HOME , SIGNUP } from '../../constant/routes.js'
import localeStore from '../../store/localeStore.js';
import messages from './Header.i18n.js';

@loadStyle(styles)
@i18n(messages)
@foundation
@routerNavigation
@routerState
class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activeLocale: localeStore.getLocale()
        };
        bindMethods(this, 'signIn', 'signUp', 'signOut', 'changeLocale');
    }
    
    signIn() {
        authenticationCreator.popUpSignIn();
    }
    signUp() {
        this.props.transitionTo(SIGNUP);
    }
    signOut() {
        authenticationCreator.signOut();
        this.props.transitionTo(HOME);
    }

    changeLocale() {
        let locale = localeStore.getLocale() === 'en-US' ? 'zh-Hans-CN' : 'en-US';
        this.setState({
            activeLocale: locale
        });
        localeCreator.changeLocale(locale);
    }

    render() {
        let userPanel;
        let account = false;
        if(!account) {
            userPanel = (
                <div>
                  <span name="signInLink"onClick={this.signIn}>
                    <FormattedMessage message={this.getIntlMessage('sign-in')} />
                  </span>
                  <span name="signUpLink" onClick={this.signUp}>
                    <FormattedMessage message={this.getIntlMessage('sign-up')} />
                  </span>
                </div>
            );
        } else {
            userPanel = (
                <div className="logged">
                    <span className="logged-name">{account}</span>
                    <span name="signOutLink" className="sign-out" onClick={this.signOut}>
                        {this.getIntlMessage('sign-up')}
                    </span>
                </div>
            );
        }
        //let signInPanel = false ? '' : (
            let signInPanel = (
            <div className="sign-in-panel right">
                {userPanel}
            </div>
        );

        return (
            <header className="Header">
                <div className="header-container">
                    <div className="logo-panel left">
                        <Link to="home">{this.getIntlMessage('title')}</Link>
                    </div>
                    {signInPanel}
                    <div className="language-panel" onClick={this.changeLocale}>
                        <a id="en-US" className={this.state.activeLocale === 'en-US' && 'active'} href="javascript:void(0)" >English</a>
                        <a id="zh-Hans-CN" className={this.state.activeLocale === 'zh-Hans-CN' && 'active'} href="javascript:void(0)" >简体中文</a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;