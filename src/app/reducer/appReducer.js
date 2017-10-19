/**
 * Created by devollove9 on 2017/10/6.
 */
let initNavList = {
    navMain: [],
    bookDetails: []
};
const app = (state = initNavList, action) => {
    switch (action.type) {
        case 'RECEIVE_NAV':
            return {
                ...state,   
                navMain: action.navMain
            };
        case 'RECEIVE_BOOK':
            return {
                ...state,
                bookDetails: action.bookDetails
            };
        default:
            return {...state};
    }
}
export { app };
export default app;