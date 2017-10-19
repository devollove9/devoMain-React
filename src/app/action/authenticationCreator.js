/**
 * Created by devollove9 on 2017/10/1.
 */
import Dispatcher from  '../core/Dispatcher.js';
import { SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_OUT, POPUP_SIGN_IN, RESTORE_SESSION } from '../constant/actionTypes.js';
import AuthService from '../service/authentication.js';

let AuthActionCreators = {
    loginAuth(account, pwd){
        if(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(account)) {
            return AuthService.signInByEmail(account, pwd)
                .then((result) => {
                    try {
                        Dispatcher.dispatch({
                            type: SIGN_IN_SUCCESS,
                            data: {
                                msg: account,
                                userId: result.userId
                            },
                        });
                    } catch (e) {
                        console.error(e);
                    }
                })
                .catch((error) => {
                    Dispatcher.dispatch({
                        type: SIGN_IN_FAIL,
                        data: {
                            msg: error
                        }
                    });
                });
        } else if(/^[0-9]{10}$/.test(account)) {
            return AuthService.signInByPhone(account, pwd)
                .then((result) => {
                    try {
                        Dispatcher.dispatch({
                            type: SIGN_IN_SUCCESS,
                            data: {
                                msg: account,
                                userId: result.userId
                            },
                        });
                    } catch(e) {
                        console.error(e);
                    }
                })
                .catch((error) => {
                    Dispatcher.dispatch({
                        type: SIGN_IN_FAIL,
                        data: {
                            msg: error
                        }
                    })
                });
        }
    },

    signOut(){
        AuthService.signOut();
        Dispatcher.dispatch({
            type: SIGN_OUT,
        });
    },

    popUpSignIn() {
        Dispatcher.dispatch({
            type: POPUP_SIGN_IN,
        });
    },

    restoreSession() {
        let session = AuthService.restoreSession();
        if(session) {
            Dispatcher.dispatch({
                type: RESTORE_SESSION,
                data: {
                    session
                }
            });
        }
    }
};

export default AuthActionCreators;
