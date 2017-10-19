/**
 * Created by devollove9 on 2017/10/2.
 */
const TOKEN_PREFIX = 'com.yaxingli.api.token';

const CookieNames = {
    TOKEN_FLAG: 'token',
    TOKEN: `${TOKEN_PREFIX}.token`,
    MAX_AGE: `${TOKEN_PREFIX}.maxAge`,
    EXPIRE_AT: `${TOKEN_PREFIX}.expireAt`,
    USER_ID: `${TOKEN_PREFIX}.userId`,
    CREDENTIAL: `${TOKEN_PREFIX}.credential`,
    USERNAME: `${TOKEN_PREFIX}.username`,
    PHONE: `${TOKEN_PREFIX}.phone`,
    EMAIL: `${TOKEN_PREFIX}.email`,
    USER_ROLE: `${TOKEN_PREFIX}.role`
};

export default CookieNames;
