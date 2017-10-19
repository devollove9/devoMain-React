/**
 * Created by devollove9 on 2017/10/6.
 */
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/reducer.js';
import { composeWithDevTools } from 'redux-devtools-extension'


const store = ( preloadedState ) => {
    const reduxStore = createStore(
        reducer,
        preloadedState,
        composeWithDevTools( applyMiddleware( thunk ) )
    );
    //reduxStore.asyncReducers = {}
    //reduxStore.unsubscribeHistory = history.listen(updateLocation(store))
    /*
    if ( module.hot ) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducer/reducer.js').default;
            reduxStore.replaceReducer( nextReducer );
        })
    }*/

    return reduxStore;
}


export default store;