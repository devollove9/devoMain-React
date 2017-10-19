/**
 * Created by devollove9 on 2017/10/2.
 */
import Dispatcher from  '../core/Dispatcher.js';
import ActionTypes from '../constant/actionTypes.js';


let RestAPIActionCreators = {
    /*
    queryStoreInfoByStoreId(storeId){

        return PublicService.getStoreByStoreId(storeId)
            .then((result) => {
                let store = result.map((json)=> {
                    return new Store(json);
                });
                Dispatcher.dispatch({
                    type: ActionTypes.RECEIVE_ONE_STORE,
                    data: {
                        store
                    }
                })
            })
            .catch((error) => {
                Dispatcher.dispatch({
                    type: ActionTypes.FAIL_QUERY_ONE_STORE,
                    data: {
                        error: error
                    }
                })
            });
    }*/
};

export default RestAPIActionCreators;
