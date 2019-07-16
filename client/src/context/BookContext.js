import {createContext} from "react";

const BookContext = createContext({
   books: [],
   formattedBooks: [],
   book:{},
   loadBooks : () => {},
   loadTrends : () => {},
   findBook : (id) => {},
   findBookWithAdvice :(id) => {},
   sendAdvice: (advice) => {}
})

export default BookContext