/**
 * Created by devollove9 on 2017/10/2.
 */
import request from './request';
import md5 from 'md5';
import Q from 'q';
import CookieService from './cookie.js';
import CookieNames, { CREDENTIAL, TOKEN_FLAG, USER_ID, EXPIRE_AT } from '../constant/cookieNames.js';

/** @module  AuthService */

const AuthService = {
    signInByUsername(username, password) {
        let query = {
            username: username,
            password: md5(password),
            maxAge: 3600
        };

        return Q.Promise((resolve, reject) => {
            request.get('/auth/user', query)
                .then((token) => {
                    request.setToken(token);
                    resolve(token);
                })
                .catch(reject);
        });
    },
    signInByEmail(email, password) {
        let query = {
            email: email,
            password: md5(password),
            maxAge: 3600
        };

        return Q.Promise((resolve, reject) => {
            request.get('/auth/email', query)
                .then((token) => {
                    request.setToken(token);
                    resolve(token);
                })
                .catch(reject);
        });
    },

    signInByPhone(phone, password) {
        let query = {
            phone: phone,
            password: md5(password),
            maxAge: 3600
        };
        return Q.Promise((resolve, reject) => {
            request.get('/auth/phone', query)
                .then((token) => {
                    request.setToken(token);
                    resolve(token);
                })
                .catch(reject);
        });
    },
    refreshToken(token){
        let query = {
            maxAge: 3600
        };
        let headers = {
            'Authorization-Token': token
        };
        return request.get('/auth/refresh', query);
    },

    signOut(){
        request.clearToken();
    },

    restoreSession() {
        if(!CookieService.get(TOKEN_FLAG)) {
            return null;
        }
        let expireAt = CookieService.get(EXPIRE_AT);
        if(expireAt < Date.now()) {
            // Session has been timeout
            this.signOut();
            return null;
        }
        let accountNameSymbol = CookieService.get(CREDENTIAL).toUpperCase();
        return {
            account: CookieService.get(CookieNames[accountNameSymbol]),
            userId: CookieService.get(USER_ID)
        };
    }
};

export default AuthService;


