/**
 * Created by devo on 10/3/2017.
 */
import React, { Component } from 'react';
import loadStyle from '../../library/loadStyle';
import intl from 'react-intl-universal';
import i18n from '../../library/i18n.js';
import message from './SignUp.i18n.js';
import styles from './SignUp.scss';
import { bindMethods } from '../../util/commonUtils';
import routerNavigation from '../../library/routerNavigation.js';
//import routerState from '../../library/routerState.js';

@loadStyle(styles)
@i18n(message)
@routerNavigation()
//@routerState
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        bindMethods(this, 'submitSignUp', 'checkPassword', 'checkUsername' , 'onUsernameChange' , 'onPasswordChange' );
    }
    onUsernameChange( e ){
        console.log( e );
    }
    onPasswordChange( e ){
        console.log( e );
    }
    submitSignUp() {}

    checkPassword() {}

    checkUsername() {}

    render() {
        return (
            <div className='signUp'>
                <div className='signUp-module'>
                    <h3 className='signUp-head'>{intl.get('signUp-title')}</h3>
                    <form className='signUp-panel' >
                        <input className='form-text' name='email_proxy' placeholder={intl.get('signUp-username-placeholder')} type='text' autoFocus={true} required onChange={this.onUsernameChange} />
                        <input className='form-text' name='password_proxy' placeholder={intl.get('signUp-password-placeholder')} type='password' />

                    </form>
      
                </div>
            </div>
        )
    }
}

export default SignUp;
