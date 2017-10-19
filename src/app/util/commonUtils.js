/**
 * Created by devollove9 on 2017/10/1.
 */
const bindMethods = ( obj , ...methodNames ) => {
    methodNames.forEach((method)=> {
        obj[method] = obj[method].bind(obj);
    });
}
const util = {
    isPhoneNumber(s) {
        let regexp = /^[0-9]{10}$/;
        return regexp.test(s);
    },

    isEmail(s) {
        let regexp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        return regexp.test(s);
    }
}
export { bindMethods }
export default util;