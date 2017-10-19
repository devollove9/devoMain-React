/**
 * Created by devollove9 on 2017/10/2.
 */
import store from  '../core/ReduxStore.js';
import { CHANGE_LOCALE , GET_LOCALE ,UPDATE_LOCALE } from '../constant/actionTypes.js';

const changeLocaleAction = ( activeLocale ) => ({
    type: 'CHANGE_LOCALE' , data: activeLocale
})
//const onChangeLocale = ( locale ) => changeLocaleAction( locale );
export const onChangeLocale = ( activeLocale ) => async ( dispatch , getState ) => {
    try {
        await dispatch( changeLocaleAction( activeLocale ) )
    } catch (error) {
        console.log('error: ', error)
    }
}

const getLocaleAction =() =>({
    type:'GET_LOCALE'
})
//const onGetLocale = () => getLocaleAction();
export const onGetLocale = () => async ( dispatch , getState ) => {
    try {
        await dispatch( getLocaleAction() )
    } catch (error) {
        console.log('error: ', error)
    }
}

const updateLocaleAction = ( locales ) => ({
    type: 'UPDATE_LOCALE' , data: locales
})
//const onUpdateLocale = ( locales ) => updateLocaleAction( locales );
export const onUpdateLocale = ( locales ) => async ( dispatch , getState ) => {
    try {
        await dispatch( updateLocaleAction( locales ) )
    } catch (error) {
        console.log('error: ', error)
    }
}


const getActiveLocaleAction =() =>({
    type:'GET_ACTIVE_LOCALE'
})

//const onGetActiveLocale = () => getActiveLocaleAction();
export const onGetActiveLocale = () => async ( dispatch , getState ) => {
    try {
        await dispatch( getActiveLocaleAction() )
    } catch (error) {
        console.log('error: ', error)
    }
}
/*
const LocaleActionCreators = {
    onChangeLocale:onChangeLocale,
    onGetActiveLocale: onGetActiveLocale,
    onGetLocale: onGetLocale,
    onUpdateLocale: onUpdateLocale
};

//export { onChangeLocale , onGetActiveLocale , onGetLocale }
//export default LocaleActionCreators;
*/
    