/**
 * Created by devollove9 on 2017/10/2.
 */
import cookie from 'react-cookie';

let ROOT = '/';

const CookieService = {
    set(name, value, opt = { path: ROOT }) {
        cookie.save(name, value, opt);
    },

    get(name, defaultValue = null) {
        return cookie.load(name) || defaultValue;
    },

    remove(names, path = ROOT) {
        if(Array.isArray(names)) {
            names.forEach((name) => {
                cookie.remove(name, path);
            });
        } else {
            cookie.remove(names, path);
        }
    }
};

export default CookieService