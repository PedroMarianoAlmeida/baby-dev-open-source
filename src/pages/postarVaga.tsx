import { getAllStackOptions } from "@services/stack";
import JobPostForm from "@organisms/JobPostForm";

const PostJobPage = ({ stackAllOptions }) => {
  console.log(stackAllOptions);
  return (
    <>
      <JobPostForm stackAllOptions={stackAllOptions}/>
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
