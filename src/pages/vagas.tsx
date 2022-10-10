import { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { getRecentJobs } from "@services/job";

import Select from "@molecules/formComponents/Select";
import UserStackSelector from "@organisms/UserStackSelector";

import { getAllStackOptions } from "@services/stack";
import { getRequisitesOptions } from "@services/requisites";
import { UserContext } from "@contexts/UserContext";

interface IFormInputs {
  stack: string[];
  requisites: string[];
}

const schema = yup
  .object({
    stack: yup.string(),
    requisites: yup.array(),
  })
  .required();

const JobsPage = ({ stackAllOptions, requisitesOptions, recentJobs }) => {
  const { currentUser } = useContext(UserContext);
  const { stackSelected } = currentUser;

  console.log("Recent Jobs->", recentJobs);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInputs) => {
    console.log(data);
  };

  const {
    onChange: onChangeRequisites,
    onBlur: onBlurRequisites,
    name: nameRequisites,
    ref: refRequisites,
  } = register("requisites");

  return (
    <div>
      <p>Vagas</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          onChange={onChangeRequisites}
          onBlur={onBlurRequisites}
          name={nameRequisites}
          ref={refRequisites}
          errors={errors}
          options={requisitesOptions}
          multiple
        />

        <UserStackSelector
          allOptions={stackAllOptions}
          initialSelected={stackSelected}
          control={control} //stack form name is inside this component
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export async function getServerSideProps(context) {
  //Put in a promise all
  const stackAllOptions = await getAllStackOptions();
  const requisitesOptions = await getRequisitesOptions();
  const recentJobs = await getRecentJobs();

  return {
    props: {
      stackAllOptions,
      requisitesOptions,
      recentJobs,
    },
  };
}

export default JobsPage;
