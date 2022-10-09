import { useContext } from "react";

import UserStackSelector from "@organisms/UserStackSelector";
import UserRequisitesSelector from "@molecules/formComponents/UserRequisitesSelector";
import { getAllStackOptions } from "@services/stack";
import { getRequisitesOptions } from "@services/requisites";
import { UserContext } from "@contexts/UserContext";

const JobsPage = ({ stackAllOptions, requisitesOptions }) => {
  const { currentUser } = useContext(UserContext);
  const { stackSelected } = currentUser;

  return (
    <div>
      <p>Vagas</p>
      <UserRequisitesSelector requisites={requisitesOptions} />
      <UserStackSelector
        allOptions={stackAllOptions}
        initialSelected={stackSelected}
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  //Put in a promise all
  const stackAllOptions = await getAllStackOptions();
  const requisitesOptions = await getRequisitesOptions();

  return {
    props: {
      stackAllOptions,
      requisitesOptions,
    },
  };
}

export default JobsPage;
