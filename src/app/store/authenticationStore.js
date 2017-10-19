/**
 * Created by devollove9 on 2017/10/3.
 */
import EventEmitter from 'eventemitter3';
import keyMirror from 'keymirror';

import Dispatcher from '../core/Dispatcher.js';
import ActionTypes, { RESTORE_SESSION } from '../constant/actionTypes.js';
import MessageNames from '../constant/messageNames.js';

let session = {
    account: null,
    userId: null
};

let returnMessage = {
    type: '',
    success: '',
    error: '',
    errorCode: '',
};

let Events = keyMirror({
    SESSION_UPDATE: null,
    CHANGE_EVENT: null
});


let AuthStore = Object.assign({}, EventEmitter.prototype, {

    getAuthAccount(){
        return session.account;
    },

    getLoggedUserId(){
        return session.userId;
    },

    getReturnType(){
        return returnMessage.type;
    },

    getSuccessMsg(){
        return returnMessage.success;
    },

    getErrorMsg(){
        return returnMessage.error;
    },

    getErrorCode() {
        return returnMessage.errorCode;
    },

    emitChange() {
        return this.emit(Events.CHANGE_EVENT);
    },

    onChange(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    offChange(callback) {
        this.off(Events.CHANGE_EVENT, callback);
    },
    Events
});

AuthStore.dispatchToken = Dispatcher.register((action) => {
    switch (action.type) {
        case ActionTypes.SIGN_IN_SUCCESS:
            returnMessage["type"] = 'success';
            returnMessage["success"] = MessageNames.SIGN_IN_SUCCESS;
            session.account = action.data.msg;
            session.userId = action.data.userId;
            AuthStore.emitChange();
            AuthStore.emit(Events.SESSION_UPDATE);
            break;

        case ActionTypes.SIGN_IN_FAIL:
            returnMessage["errorCode"] = action.data.msg.errorCode;
            returnMessage["type"] = 'error';
            returnMessage["error"] = action.data.msg.errorMessage;
            AuthStore.emitChange();
            break;

        case ActionTypes.SIGN_OUT:
            returnMessage["type"] = 'success';
            session.account = null;
            session.userId = null;
            returnMessage["success"] = MessageNames.SIGN_OUT_SUCCESS;
            AuthStore.emitChange();
            AuthStore.emit(Events.SESSION_UPDATE);
            break;

        case ActionTypes.POPUP_SIGN_IN:
            returnMessage["type"] = 'popup';
            returnMessage["success"] = MessageNames.SIGN_IN_POPUP;
            session.account = null;
            AuthStore.emitChange();
            break;

        case RESTORE_SESSION:
            session = action.data.session;
            AuthStore.emit(Events.SESSION_UPDATE);
            break;

        default:
    }
});

export default AuthStore;