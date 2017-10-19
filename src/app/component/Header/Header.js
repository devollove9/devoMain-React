/**
 * Created by devollove9 on 2017/10/1.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link , Redirect , browserHisotry } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import intl from 'react-intl-universal';
import i18n from '../../library/i18n.js';
import loadStyle from '../../library/loadStyle';
import { bindMethods , createList } from '../../util/commonUtils';
import PropTypes from 'prop-types'
//import Navigation from '../../component/Navigation/Navigation.js';
//import foundation from '../../library/foundation.js';
//import authenticationCreator from '../../action/authenticationCreator.js';
//import registerCreator from '../../action/registerCreator.js';
import routerNavigation from '../../library/routerNavigation.js';
import routerState from '../../library/routerState.js';
import * as localeActionCreators from '../../action/localeCreator';
import foundation from '../../library/foundation';
//import { HOME , SIGNUP } from '../../constant/routes.js'
//import localeStore from '../../store/localeStore.js';
import messages from './Header.i18n.js';
import styles from './Header.scss';

const mapStateToProps = state => {
    return {
        ...state.locale
    }
}

const mapDispatchToProps =  dispatch => bindActionCreators( localeActionCreators , dispatch );
const proptypes = {
    router:PropTypes.object,
    history:PropTypes.object,
    location:PropTypes.object
};

//@i18n(messages)
//@foundation
//
//@routerState

// Loading Page Style
@loadStyle(styles)
// Loading languages
@i18n( messages )
// Foundation
//@foundation
@routerNavigation()
// Connecting state, action to Header component
@connect( mapStateToProps , mapDispatchToProps )
class Header extends React.Component {

    constructor(props){
        super(props);
        
        bindMethods( this , 'changeLocale' , 'signUp' , 'signIn' , 'signOut' );
    }
    componentDidMount() {
        console.log( this.props );
    }

    componentWillUnmount(){
    }
    signIn( e ) {
        e.preventDefault();
        this.props.transitionTo( this , '/signin' );
    }
    signUp( e ) {
        e.preventDefault();
        this.props.transitionTo( this , '/signup' );
        
    }
    signOut() {
        //authenticationCreator.signOut();
        //this.props.transitionTo(HOME);
    }
    changeLocale( event ) {
        let selectedLocale = event.target.value;
        let locale = this.props.activeLocale;
        if ( selectedLocale === locale ) return;
        let locales = this.props.locales;
        intl.init({
            currentLocale:selectedLocale,
            locales
        })
        this.props.onChangeLocale( selectedLocale );
    }

    render() {
        let userPanel;
        let account = false;
        if(!account) {
            userPanel = (
                <div>
                  <span name="signInLink"onClick={this.signIn}>
                      {intl.get('sign-in')}
                  </span>
                    
                  <span name="signUpLink" onClick={this.signUp}>
                       {intl.get('sign-up')}
                  </span>
                </div>
            );
        } else {
            userPanel = (
                <div className="logged">
                    <span className="logged-name">{account}</span>
                    <span name="signOutLink" className="sign-out" onClick={this.signOut}>
                        {intl.get('sign-up')}
                    </span>
                </div>
            );
        }
        let signInPanel = (
            <div className="sign-in-panel right flex-auto">
                {userPanel}
            </div>
        );
       
        let selection = Object.keys( this.props.locales ).map( ( locale ) => 
            <option key = {locale} value = {locale} >{ this.props.locales[ locale ].localeName } </option>
        );

        return (
            <header className="Header">
                <div className="header-container">
                    <div className="logo-panel left">
                        <Link to="/">{intl.get( 'title')}</Link>
                    </div>
                    <select className="language-panel" defaultValue={this.props.activeLocale} onChange={this.changeLocale} >
                        {selection}
                    </select>
                    {signInPanel}
                </div>
            </header>
        );
    }
}
Header.propTypes = proptypes;

export default Header;
