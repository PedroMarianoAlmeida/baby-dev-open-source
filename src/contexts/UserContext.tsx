import { createContext } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
  return <UserContext.Provider value={{user: "testUsers"}}>{props.children}</UserContext.Provider>;
};

export default UserProvider;
