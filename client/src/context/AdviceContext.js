import {createContext} from "react";

const AdviceContext = createContext({
  advices: [],
  getAdvices: (book) => {
    
  },
  postAdvice : (user,book) => {}
})

export default AdviceContext; 