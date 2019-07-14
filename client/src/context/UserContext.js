import {createContext} from "react";

const UserContext = createContext({
  login: (user) => {},
  register : (user) => {}
});
export default UserContext;