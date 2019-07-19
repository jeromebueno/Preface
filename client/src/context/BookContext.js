import {createContext} from "react";

const BookContext = createContext({
   books: [],
   trends: [],
   favorites: [],
   formattedBooks: [],
   book:{},
   loadBooks : () => {},
   loadTrends : () => {},
   loadFavorite : (favorite) => {},
   findBook : (id) => {},
   findBookWithAdvice :(id) => {},
   sendAdvice: (advice) => {},
   updateAdvice: (id,advice) => {},
   handleFavorite: (bookId,isLiked) => {},
   searchBook: (target) => {},
})

export default BookContext