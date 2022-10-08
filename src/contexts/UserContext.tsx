import { useState, createContext } from "react";
import { userLogin } from "@services/user";

interface IUser {
  id: string;
  name: string;
  image: string;
  roles: string[];
  stackSelected: string[];
}

const emptyUser: IUser = {
  id: "",
  name: "",
  image: "",
  roles: [],
  stackSelected: [],
};

export const UserContext = createContext({
  currentUser: emptyUser,
  login: (id: string) => {},
  logout: () => {},
});

const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(emptyUser);

  const login = async (id: string) => {
    const userData = await userLogin(id);
    if (userData.name !== "") setCurrentUser(userData);
  };

  const logout = () => setCurrentUser(emptyUser);

  return (
    <UserContext.Provider value={{ currentUser, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
