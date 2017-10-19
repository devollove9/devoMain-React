/**
 * Created by devollove9 on 2017/10/8.
 */
import { merge } from 'lodash';
let currentLocales = {

};
let initState = {
    activeLocale: 'en-US',
    locales:currentLocales
};

function locale( state = initState, action ) {
    switch (action.type) {
        case 'CHANGE_LOCALE':
            //console.log( 'IN localeReducer CHANGE_LOCALE' ,  state );
            return {
                ...state ,
                activeLocale: action.data
            }
        case 'GET_LOCALE':
        case 'GET_CURRENT_LOCALE':
            return {
                ...state
            }
        case 'UPDATE_LOCALE':
            //console.log( 'Here')
            let newLocales = Object.assign(
                {},
                state.locales,
                action.data
            )
            return {
                ...state,
                locales:newLocales
            }
        case 'ADD_LOCALE':
            merge( currentLocales,
                currentLocales,
                state
            )
            return currentLocales;
        case 'GET_LOCAL_LOCALE':
            return currentLocales;
        default:
            return {...state } 
    }
}

export { locale };
export default locale;