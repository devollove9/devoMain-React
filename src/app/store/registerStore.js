/**
 * Created by devollove9 on 2017/10/3.
 */
import EventEmitter from 'eventemitter3';

import Dispatcher from '../core/Dispatcher.js';
import ActionTypes from '../constant/actionTypes.js';
import MessageNames from '../constant/messageNames.js';

let account = null;
let source = null;

let returnMessage = {
    type: '',
    success: '',
    error: ''
};
const CHANGE_EVENT = 'change';

let RegisterStore = Object.assign({}, EventEmitter.prototype, {

    getRegisterAccount(){
        return account;
    },

    getSource(){
        return source;
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

    getActionType() {
        return returnMessage.actionType;
    },

    /**
     * Emits change event to all registered event listeners.
     *
     * @returns {Boolean} Indication if we've emitted an event.
     */
    emitChange() {
        return this.emit(CHANGE_EVENT);
    },

    /**
     * Register a new change event listener.
     *
     * @param {function} callback Callback function.
     */
    onChange(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * Remove change event listener.
     *
     * @param {function} callback Callback function.
     */
    offChange(callback) {
        this.off(CHANGE_EVENT, callback);
    },

    Events: {
        CHANGE_EVENT
    }
});

RegisterStore.dispatchToken = Dispatcher.register((action) => {
    
    let actionType = action.type;
    let type;
    let success;
    let error;
    switch( action.type ) {
        
        //register
        case ActionTypes.REGISTER_SUCCESS:
            type = 'popup';
            success = MessageNames.ACTIVATE_POPUP;
            account = action.data.msg;
            source = action.data.source;
            break;

        case ActionTypes.REGISTER_FAIL:
            type = 'error';
            error = action.data.msg.errorMessage;
            break;

        //activate
        case ActionTypes.ACTIVATE_SUCCESS:
            console.log('aaaaaaaaaaaaaaaaa');
            type = 'success';
            success = MessageNames.ACTIVATE_SUCCESS;
            account = action.data.msg;
            break;

        case ActionTypes.ACTIVATE_FAIL:
            console.log('bbbbbbbbbbbbbbbb');console.log(action.data.msg.errorMessage);
            type = 'error';
            error = action.data.msg.errorMessage;
            break;

        case ActionTypes.POPUP_SIGN_UP:
            type = 'popup';
            success = MessageNames.SIGN_UP_POPUP;
            account = action.data.account;
            break;

        case ActionTypes.POPUP_ACTIVATE:
            type = 'popup';
            success = MessageNames.ACTIVATE_POPUP;
            account = action.data.account;
            source = action.data.source;
            break;

        case ActionTypes.POPUP_GET_CODE:
            type = 'popup';
            success = MessageNames.GET_CODE_POPUP;
            break;

        case ActionTypes.RESEND_REGISTER_CODE_SUCCESS:
            type = 'register_code_resend';
            success = "Activation code sent!";
            break;

        case ActionTypes.RESEND_REGISTER_CODE_FAIL:
            type = 'register_code_resend';
            error = action.data.msg.errorMessage;
            break;
        
        default:
            break;
    }
    returnMessage ={
        actionType,
        type ,
        success,
        error
    }
    RegisterStore.emitChange();
});
export default RegisterStore;