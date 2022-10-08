import UserStackSelector from "@organisms/UserStackSelector";
import { getAllStackOptions } from "@services/stack";

const JobsPage = ({ stackAllOptions }) => {
  console.log(stackAllOptions);

  return (
    <div>
      <p>Vagas</p>
      <UserStackSelector allOptions={stackAllOptions} initialSelected={[]} />
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
