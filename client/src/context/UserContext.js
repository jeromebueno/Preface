import {createContext} from "react";

const UserContext = createContext({
  login: (user) => {},
  register : (user) => {},
  findAvis : (user) => {},
  
});
export default UserContext;