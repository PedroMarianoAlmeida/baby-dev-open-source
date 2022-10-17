import { useContext } from "react";

import { createCompany, isCompanyAlreadyRegistered } from "@services/company";
import { UserContext } from "@contexts/UserContext";
import PostCompany from "@organisms/forms/PostCompany/PostCompany";

const novaEmpresa = () => {
  const { currentUser } = useContext(UserContext);
  const { roles } = currentUser;

  if (!roles.includes("curator")) return <p>Página exclusiva de Curadores</p>;

  return (
    <>
      <PostCompany
        createCompany={createCompany}
        isCompanyAlreadyRegistered={isCompanyAlreadyRegistered}
      />
    </>
  );
};

export default novaEmpresa;
