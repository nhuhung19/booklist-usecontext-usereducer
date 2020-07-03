export const BookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, {
        title: action.newBook.title,
        author: action.newBook.author,
        id: Date.now()
      }]
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id)
    default:
      return state;
  }
}