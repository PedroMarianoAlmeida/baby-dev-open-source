import { useContext } from "react";

import { UserContext } from "@contexts/UserContext";
import MenuItem from "./MenuItem";

const CuratorMenuOptions = () => {
  const { currentUser } = useContext(UserContext);
  const { roles } = currentUser;

  if (!roles.includes("curator")) return null;

  return (
    <>
      <MenuItem href="/postarVaga" text="Postar Vaga" />
    </>
  );
};

export default CuratorMenuOptions;
