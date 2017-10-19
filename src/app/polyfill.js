/**
 * Created by devollove9 on 2017/9/30.
 */
/*
import areIntlLocalesSupported from 'intl-locales-supported';

let localesSupported = [ 'en-US', 'zh-Hans-CN' ];

if(  global.Intl  ) { 
    if(  !areIntlLocalesSupported(  localesSupported  )  ) { 
        require(  'intl'  );
        Intl.NumberFormat   = IntlPolyfill.NumberFormat;
        Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
} else { 
    global.Intl = require(  'intl'  );
}
*/
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}

if (typeof Object.assign != 'function') {
    Object.assign = function(target) {
        'use strict';
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}