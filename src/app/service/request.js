/**
 * Created by devollove9 on 2017/10/2.
 */
import request from 'superagent';
import Q from 'q';

import CookieService from './cookie.js';
import CookieNames, { 
    TOKEN_FLAG, 
    TOKEN, 
    MAX_AGE, 
    EXPIRE_AT, 
    USER_ID, 
    USER_ROLE, 
    ORGANIZATION_ID, 
    ORGANIZATION_ROOT, 
    CREDENTIAL, PHONE, 
    EMAIL 
} from '../constant/cookieNames.js';


function composeQuery(query) {
    query = query || {};
    var arr = [];
    Object.keys(query).forEach(function(key) {
        arr.push(key + '=' + query[key]);
    });
    return '?' + arr.join('&');
}

function composeHeader(headers, req) {
    headers = headers || {};
    Object.keys(headers).forEach(function(key) {
        req = req.set(key, headers[key]);
    });
    return req;
}


class Restful {
    constructor(config) {
        if(!(this instanceof Restful)) return new Restful(config);
        this.debug = false;
        this.configure(config);
    }

    get(url, query, headers) {
        return this._request('get', url, query, {}, headers);
    }

    post(url, query, body, headers) {
        return this._request('post', url, query, body, headers);
    }

    put(url, query, body, headers) {
        return this._request('put', url, query, body, headers);
    }

    _request(method, url, query, body, headers) {
        var queryString = composeQuery(query);
        var req = request[method](this.baseUrl + url + queryString);
        if(method !== 'get') {
            req = req
                .send(body)
                .set('Content-Type', 'application/json');
        }
        req = req.set('Accept', 'application/json');
        if(this.debug)
            req = req.set('X-Response-ErrorDetail', 1);
        req = composeHeader(headers, req);
        var token = this.getToken();
        if(token && token.token) {
            req = req.set('Authorization-Token', token.token);
        }

        var d = Q.defer();
        req.end(function(err, res) {
            if(err) {
                return d.reject(err);
            }
            if(res.status == 200) {
                let responseBody = res.body;
                // TODO: how to determine the response is failure
                if(Array.isArray(responseBody.error) || Object.keys(responseBody.error) != 0) {
                    d.reject(responseBody.error);
                } else {
                    d.resolve(responseBody.data);
                }
            } else {
                d.reject({status: res.status});
            }
        });

        return d.promise
            .catch((error) => {
                let errorObject = {
                    request: `${method.toUpperCase()} ${url}`,
                    query,
                    body,
                    headers,
                    error: JSON.stringify(error)
                };
                NewRelic.noticeError(new Error(JSON.stringify(errorObject)));
                throw error;
            });
    }

    configure(config) {
        config = config || {};
        this.config = config;
        if(config.baseUrl)
            this.baseUrl = config.baseUrl;
        if(config.debug)
            this.debug = config.debug;
    }

    setToken(token) {
        CookieService.set(TOKEN_FLAG, true);
        CookieService.set(TOKEN, token.token);
        CookieService.set(MAX_AGE, token.maxAge);
        CookieService.set(EXPIRE_AT, Date.now() + token.maxAge * 1000);
        CookieService.set(USER_ID, token.userId);
        CookieService.set(USER_ROLE, token.role.join());  // token.role in an array, therefore we "join"
        let credential = token.credential;
        CookieService.set(CREDENTIAL, token.credential);
        CookieService.set(CookieNames[credential.toUpperCase()], token[credential]);
    }

    getToken() {
        if(CookieService.get(TOKEN_FLAG)) {
            let expireAt = parseInt(CookieService.get(EXPIRE_AT), 10);
            let credential = CookieService.get(CREDENTIAL);
            return {
                token: CookieService.get(TOKEN),
                expireAt,
                maxAge: parseInt(CookieService.get(MAX_AGE), 10),
                life: expireAt - Date.now(),
                userId: CookieService.get(USER_ID),
                role: CookieService.get(USER_ROLE),
                organizationId: CookieService.get(ORGANIZATION_ID),
                organizationRoot: CookieService.get(ORGANIZATION_ROOT),
                credential,
                [credential]: CookieService.get(CookieNames[credential.toUpperCase()])
            };
        }
        return null;
    }

    clearToken() {
        CookieService.remove([
            TOKEN_FLAG,
            TOKEN,
            EXPIRE_AT,
            CREDENTIAL,
            MAX_AGE,
            USER_ID,
            USERNAMEm,
            PHONE,
            EMAIL,
            USER_ROLE,
            ORGANIZATION_ID,
            ORGANIZATION_ROOT,
        ]);
    }
}

export default new Restful({});
