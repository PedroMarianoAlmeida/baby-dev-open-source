import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import styles from "./Menu.module.css";

import useDebounce from "src/hooks/useDebounce";
import Login from "./Login";
import MenuItem from "./MenuItem";
import Logo from "./Logo";
import { UserContext } from "@contexts/UserContext";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMouseLeavesMenu, setIsMouseLeavesMenu] = useState(false);

  const debouncedIsMouseLeavesMenu = useDebounce(isMouseLeavesMenu, 350);

  const { user } = useContext(UserContext);
  console.log(user);

  useEffect(() => {
    if (debouncedIsMouseLeavesMenu) {
      setShowMenu(false);
      setIsMouseLeavesMenu(false);
    }
  }, [debouncedIsMouseLeavesMenu]);

  const { root, navContainer, nav, menuContainer, hr } = styles;

  return (
    <div id={root}>
      <Logo />
      <div id={navContainer}>
        <div className="cursor-pointer">
          <Image
            src={"/icons/menu-burger.svg"}
            width={18}
            height={18}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>

        {showMenu ? (
          <nav
            id={nav}
            onMouseLeave={() => setIsMouseLeavesMenu(true)}
            onMouseEnter={() => setIsMouseLeavesMenu(false)}
          >
            <ul id={menuContainer}>
              <MenuItem href="/" text="Home 🏠" />
              <MenuItem href="/vagas" text="Vagas 🔍" />
              <MenuItem href="/parcceiros" text="Parceiros 🤝" />
              <MenuItem href="/contatos" text="Contato 📞" />
              <hr id={hr} />
              <Login />
            </ul>
          </nav>
        ) : null}
      </div>
    </div>
  );
};

export default Menu;
