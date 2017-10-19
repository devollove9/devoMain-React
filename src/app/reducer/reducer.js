/**
 * Created by devollove9 on 2017/10/6.
 */
import { combineReducers } from 'redux';
import { home } from './homeReducer';
import { header } from './headerReducer';
import { app } from './appReducer';
import { locale } from './localeReducer'
const reducer = combineReducers({
    app,
    header,
    home,
    locale
})
export { app , header , home , locale };
export default reducer;