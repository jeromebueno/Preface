import {createContext} from "react";

const BookContext = createContext({
   books: [],
   book:{},
   loadBooks : () => {},
   findBook : (id) => {},
   findBookWithAdvice :(id) => {}
})

export default BookContext