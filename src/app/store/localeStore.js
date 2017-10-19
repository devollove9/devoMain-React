/**
 * Created by devollove9 on 2017/10/1.
 */

import EventEmitter from 'eventemitter3';

import Dispatcher from '../core/Dispatcher.js';
import { CHANGE_LOCALE } from '../constant/actionTypes.js';

class LocaleStore extends EventEmitter {
    Events = {
        CHANGE_LOCALE
    }

    DEFAULT_LOCALE = 'en-US';

    constructor() {
        super();
        let locale = localStorage.getItem('defaultLocale');

        if(!locale) {
            locale = navigator.language || navigator.userLanguage;
            locale = locale.startsWith('zh') ? 'zh-Hans-CN' : 'en-US';
        }

        this.locale = locale;
    }

    isDefaultLocale() {
        return this.locale = this.DEFAULT_LOCALE;
    }

    getLanguage() {
        return this.getLocale().split('-')[0];
    }

    getDefaultLanguage() {
        return this.DEFAULT_LOCALE.split('-')[0];
    }

    isDefaultLanguage() {
        return this.getLanguage() === this.getDefaultLanguage();
    }

    getLocale() {
        return this.locale;
    }
}

let instance = new LocaleStore();

instance.dispatchToken = Dispatcher.register((action) => {
    switch(action.type) {
        case CHANGE_LOCALE:
            instance.locale = action.data.locale;
            localStorage.setItem('defaultLocale', action.data.locale);
            instance.emit(instance.Events.CHANGE_LOCALE);
            break;
        default:
            break;
    }
});

export default instance;