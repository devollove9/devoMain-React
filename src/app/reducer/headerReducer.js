/**
 * Created by devollove9 on 2017/10/6.
 */
let initNavList = {
    navMain: [],
    bookDetails: []
};
const header = (state = initNavList, action) => {
    switch (action.type) {
        case 'RECEIVE_NAV':
            return {
                ...state,   //三个点是展开符
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
export { header };
export default header;