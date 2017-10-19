/**
 * Created by devollove9 on 2017/10/2.
 */
import { locale } from '../reducer/localeReducer'

const i18n = ( locales ) => {
    return function ( TargetComponent ) {
        locale( locales , { type:"ADD_LOCALE" } );
        return TargetComponent;
    }
}
export default i18n;
