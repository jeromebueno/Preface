import {createContext} from "react";

const UserContext = createContext({
  logged: false,
  login: (user) => {},
  register : (user) => {}
})

export default UserContext;