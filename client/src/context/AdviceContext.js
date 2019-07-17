import {createContext} from "react";

const AdviceContext = createContext({
    userAdvice: [],
    loadUserAdvice : () => {},
});
export default AdviceContext;