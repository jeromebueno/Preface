import {createContext} from "react";

const BookContext = createContext({
   books: [],
   book:{},
   loadBooks : () => {},
   findBook : (id) => {}
})

export default BookContext