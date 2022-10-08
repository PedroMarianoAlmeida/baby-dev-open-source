import { useContext } from "react";

import UserStackSelector from "@organisms/UserStackSelector";
import { getAllStackOptions } from "@services/stack";
import { UserContext } from "@contexts/UserContext";

const JobsPage = ({ stackAllOptions }) => {
  const { currentUser } = useContext(UserContext);
  const { stackSelected } = currentUser;

  return (
    <div>
      <p>Vagas</p>
      <UserStackSelector
        allOptions={stackAllOptions}
        initialSelected={stackSelected}
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  const stackAllOptions = await getAllStackOptions();
  return {
    props: {
      stackAllOptions,
    },
  };
}

export default JobsPage;
