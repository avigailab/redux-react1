export function selectBookAction(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

export function addBookAction(data) {
    return {
        type: 'ADD_BOOK',
        payload: data
    }
}