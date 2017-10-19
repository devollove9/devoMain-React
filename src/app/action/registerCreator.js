/**
 * Created by devollove9 on 2017/10/1.
 */
import Dispatcher from  '../core/Dispatcher.js';
import ActionTypes from '../constant/actionTypes.js';
import RegisterService from '../service/register.js';
import { isPhoneNumber, isEmail } from '../util/commonUtils.js';

let RegisterCreators = {
    registerAuth(username, password){
        if (isEmail(username) || isPhoneNumber( username ) ){
            let pwd = password || '';
            return RegisterService.byEmail(username, pwd)
                .then(() => {
                    Dispatcher.dispatch({
                        type: ActionTypes.REGISTER_SUCCESS,
                        data: {
                            msg: username,
                            source: 'Register'
                        },
                    });
                })
                .catch((error) => {
                    Dispatcher.dispatch({
                        type: ActionTypes.REGISTER_FAIL,
                        data: {
                            msg: error
                        }
                    })
                });
        }else if (isEmail(username)){
            let pwd = password || '';
            return RegisterService.byEmail(username, pwd)
                .then(() => {
                    Dispatcher.dispatch({
                        type: ActionTypes.REGISTER_SUCCESS,
                        data: {
                            msg: username,
                            source: 'Register'
                        },
                    });
                })
                .catch((error) => {
                    Dispatcher.dispatch({
                        type: ActionTypes.REGISTER_FAIL,
                        data: {
                            msg: error
                        }
                    })
                });
        }else if(isPhoneNumber(username)){
            let pwd = password || '';
            return RegisterService.byPhone(username, pwd)
                .then(() => {
                    Dispatcher.dispatch({
                        type: ActionTypes.REGISTER_SUCCESS,
                        data: {
                            msg: username,
                            source: 'Register'
                        },
                    });
                })
                .catch((error) => {
                    Dispatcher.dispatch({
                        type: ActionTypes.REGISTER_FAIL,
                        data: {
                            msg: error
                        }
                    })
                });
        }
    },

    resendRegisterCode(account) {
        if (isEmail(account)){
            return RegisterService.byEmail(account)
                .then(() => {
                    Dispatcher.dispatch({
                        type: ActionTypes.RESEND_REGISTER_CODE_SUCCESS,
                        data: {
                            msg: account,
                            source: 'Register'
                        },
                    });
                })
                .catch((error) => {
                    Dispatcher.dispatch({
                        type: ActionTypes.RESEND_REGISTER_CODE_FAIL,
                        data: {
                            msg: error
                        }
                    })
                });
        }else if(isPhoneNumber(account)){
            return RegisterService.byPhone(account)
                .then(() => {
                    Dispatcher.dispatch({
                        type: ActionTypes.RESEND_REGISTER_CODE_SUCCESS,
                        data: {
                            msg: account,
                            source: 'Register'
                        },
                    });
                })
                .catch((error) => {
                    Dispatcher.dispatch({
                        type: ActionTypes.RESEND_REGISTER_CODE_FAIL,
                        data: {
                            msg: error
                        }
                    })
                });
        }
    },

    registerOrganizationAccount(code, account, pwd) {
        if (isEmail(account)){

            return OrganizationService.registerByEmail(code, account, pwd)
                .then(() => {
                    Dispatcher.dispatch({
                        type: ActionTypes.REGISTER_SUCCESS,
                        data: {
                            msg: account
                        },
                    });
                })
                .catch((error) => {
                    Dispatcher.dispatch({
                        type: ActionTypes.REGISTER_FAIL,
                        data: {
                            msg: error
                        }
                    })
                });

        } else if(isPhoneNumber(account)){

            return OrganizationService.registerByPhone(code, account, pwd)
                .then(() => {
                    Dispatcher.dispatch({
                        type: ActionTypes.REGISTER_SUCCESS,
                        data: {
                            msg: account
                        },
                    });
                })
                .catch((error) => {
                    Dispatcher.dispatch({
                        type: ActionTypes.REGISTER_FAIL,
                        data: {
                            msg: error
                        }
                    })
                });
        }
    },

    activateAccount(account, code) {
        if (isEmail(account)){

            return RegisterService.activateEmail(account, code)
                .then(() => {
                    Dispatcher.dispatch({
                        type: ActionTypes.ACTIVATE_SUCCESS,
                        data: {
                            msg: account
                        },
                    });
                })
                .catch((error) => {
                    Dispatcher.dispatch({
                        type: ActionTypes.ACTIVATE_FAIL,
                        data: {
                            msg: error
                        }
                    })
                });
        }else if(isPhoneNumber(account)){
            return RegisterService.activatePhone(account, code)
                .then(() => {
                    Dispatcher.dispatch({
                        type: ActionTypes.ACTIVATE_SUCCESS,
                        data: {
                            msg: account
                        },
                    });
                })
                .catch((error) => {
                    Dispatcher.dispatch({
                        type: ActionTypes.ACTIVATE_FAIL,
                        data: {
                            msg: error
                        }
                    })
                });
        }
    },
    popUpSignUp() {
        Dispatcher.dispatch({
            type: ActionTypes.POPUP_SIGN_UP,
            data: {
                account: null
            }
        });
    },

    popUpActivate(account, source) {
        Dispatcher.dispatch({
            type: ActionTypes.POPUP_ACTIVATE,
            data: {
                account: account,
                source: source
            }
        });
    },

    popUpGetCode() {
        Dispatcher.dispatch({
            type: ActionTypes.POPUP_GET_CODE
        });
    },

};

export default RegisterCreators;