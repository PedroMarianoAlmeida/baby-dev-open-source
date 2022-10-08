import { useState, createContext } from "react";

export const UserContext = createContext();

const emptyUser = {
  id: "",
  name: "",
  image: "",
  roles: [],
};

const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(emptyUser);

  const loginService = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:4000/users/${id}`);
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (id: string) => {
    const userData = await loginService(id);
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
