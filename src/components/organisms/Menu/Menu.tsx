import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Menu.module.css";

import useDebounce from "src/hooks/useDebounce";
import Login from "./Login";
import MenuItem from "./MenuItem";
import Logo from "./Logo";
import CuratorMenuOptions from "./CuratorMenuOptions";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMouseLeavesMenu, setIsMouseLeavesMenu] = useState(false);

  const debouncedIsMouseLeavesMenu = useDebounce(isMouseLeavesMenu, 350);

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
              <CuratorMenuOptions />
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
