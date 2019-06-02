export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        case 'ADD_BOOK':
            console.log(action);
            return action.payload;
    }
    return state
}