import { useState, useContext } from "react";
import Image from "next/image";
import styles from "./Menu.module.css";

import { UserContext } from "@contexts/UserContext";

const Login = () => {
  const { currentUser, login, logout } = useContext(UserContext);
  const { name, image } = currentUser;

  return (
    <LoginUI
      isLogged={name !== ""}
      userData={{
        name,
        image,
      }}
      login={login}
      logout={logout}
    />
  );
};

interface LoginUiProps {
  isLogged: boolean;
  userData: { name: string; image: string };
  login(id: string): void;
  logout(): void;
}

const LoginUI = ({ isLogged, userData, login, logout }: LoginUiProps) => {
  const { name, image } = userData;
  const {
    menuItem,
    notLogged,
    loggedContainer,
    welcome,
    logoutContainer,
    avatar,
  } = styles;
  return (
    <li className={menuItem}>
      {isLogged ? (
        <div id={loggedContainer}>
          <div id={welcome}>Oi, {name}</div>
          <p id={logoutContainer} onClick={logout}>
            Log out
          </p>
          <div id={avatar}>
            <Image src={image} width={22} height={22} />
          </div>
        </div>
      ) : (
        <>
          <div id={notLogged} onClick={() => login("2")}>
            Login (Dev)
          </div>
          <div id={notLogged} onClick={() => login("1")}>
            Login (Cur.)
          </div>
        </>
      )}
    </li>
  );
};

export default Login;
