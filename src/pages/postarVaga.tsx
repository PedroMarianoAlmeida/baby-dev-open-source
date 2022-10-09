import { useContext, useState } from "react";

import { getAllStackOptions } from "@services/stack";
import { getRequisitesOptions } from "@services/requisites";

import JobPostForm from "@organisms/forms/JobPostForm";
import { UserContext } from "@contexts/UserContext";

const PostJobPage = ({ stackAllOptions, requisitesOptions }) => {
  const [localStackAllOptions, setLocalStackAllOptions] =
    useState(stackAllOptions);
  const { currentUser } = useContext(UserContext);
  const { roles, id, name } = currentUser;

  if (!roles.includes("curator")) return <p>Página exclusiva de Curadores</p>;

  const refreshStackAllOptions = async () => {
    const newStackAllOptions = await getAllStackOptions();
    setLocalStackAllOptions(newStackAllOptions);
  };

  return (
    <>
      <JobPostForm
        stackAllOptions={localStackAllOptions}
        curatorData={{ id, name }}
        refreshStackAllOptions={refreshStackAllOptions}
        requisitesOptions={requisitesOptions}
      />
    </>
  );
};

export async function getServerSideProps(context) {
  const stackAllOptions = await getAllStackOptions();
  const requisitesOptions = await getRequisitesOptions();

  return {
    props: {
      stackAllOptions,
      requisitesOptions,
    },
  };
}

export default PostJobPage;
