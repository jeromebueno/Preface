import {createContext} from "react";

const BookContext = createContext({
   books: [],
   book:{},
   loadBooks : () => {},
   findBook : (id) => {},
   findBookWithAdvice :(id) => {},
   sendAdvice: (advice) => {}
})

export default BookContext