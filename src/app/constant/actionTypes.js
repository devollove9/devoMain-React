/**
 * Created by devollove9 on 2017/10/1.
 */
import keyMirror from "keymirror";

const ActionTypes = keyMirror({
    // Authentication
    SIGN_IN_SUCCESS: null,
    SIGN_IN_FAIL: null,
    SIGN_OUT: null,
    REGISTER_SUCCESS: null,
    REGISTER_FAIL: null,
    RESEND_REGISTER_CODE_SUCCESS: null,
    RESEND_REGISTER_CODE_FAIL: null,
    ACTIVATE_SUCCESS: null,
    ACTIVATE_FAIL: null,
    POPUP_GET_CODE: null,
    GET_CODE_SUCCESS_FOR_EMAIL: null,
    GET_CODE_SUCCESS_FOR_PHONE: null,
    GET_CODE_FAIL: null,
    RESET_PASSWORD_SUCCESS: null,
    RESET_PASSWORD_FAIL: null,

    POPUP_SIGN_IN: null,
    POPUP_SIGN_UP: null,
    POPUP_ACTIVATE: null,
    RESTORE_SESSION: null,

    // Locale
    CHANGE_LOCALE: null,
    GET_LOCALE:null,
    GET_ACTIVE_LOCALE:null,
    UPDATE_LOCALE:null,
});

export default ActionTypes;
