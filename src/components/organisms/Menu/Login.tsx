import { useState, useContext } from "react";
import Image from "next/image";
import styles from "./Menu.module.css";

import { UserContext } from "@contexts/UserContext";

const Login = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => setIsLogin(true);
  const handleLogout = () => setIsLogin(false);

  

  return (
    <LoginUI
      isLogged={isLogin}
      userData={{
        name: "Sarah",
        image: "/sample/login-avatar.png",
      }}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
    />
  );
};

interface LoginUiProps {
  isLogged: boolean;
  userData: { name: string; image: string };
  handleLogin(): void;
  handleLogout(): void;
}

const LoginUI = ({
  isLogged,
  userData,
  handleLogin,
  handleLogout,
}: LoginUiProps) => {
  const { name, image } = userData;
  const { menuItem, notLogged, loggedContainer, welcome, logout, avatar } =
    styles;
  return (
    <li className={menuItem}>
      {isLogged ? (
        <div id={loggedContainer}>
          <div id={welcome}>Oi, {name}</div>
          <p id={logout} onClick={handleLogout}>
            Log out
          </p>
          <div id={avatar}>
            <Image src={image} width={22} height={22} />
          </div>
        </div>
      ) : (
        <div id={notLogged} onClick={handleLogin}>
          Login
        </div>
      )}
    </li>
  );
};

export default Login;
