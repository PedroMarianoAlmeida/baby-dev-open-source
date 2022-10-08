import { useContext } from "react";

import { getAllStackOptions } from "@services/stack";
import JobPostForm from "@organisms/JobPostForm";
import { UserContext } from "@contexts/UserContext";
import PostTechStack from "@organisms/PostTechStack";

const PostJobPage = ({ stackAllOptions }) => {
  const { currentUser } = useContext(UserContext);
  const { roles, id, name } = currentUser;

  if (!roles.includes("curator")) return <p>Página exclusiva de Curadores</p>;

  return (
    <>
      <PostTechStack stackAllOptions={stackAllOptions}/>
      <JobPostForm
        stackAllOptions={stackAllOptions}
        curatorData={{ id, name }}
      />
    </>
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

export default PostJobPage;
