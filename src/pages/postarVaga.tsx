import { useContext, useState } from "react";

import { getAllStackOptions } from "@services/stack";
import { getRequisitesOptions } from "@services/requisites";
import { createJob } from "@services/job";
import { getAllCompaniesData } from "@services/company";

import JobPostForm from "@organisms/forms/JobPostForm";
import { UserContext } from "@contexts/UserContext";

const PostJobPage = ({
  stackAllOptions,
  requisitesOptions,
  companiesAllOptions,
}) => {
  const [localStackAllOptions, setLocalStackAllOptions] =
    useState(stackAllOptions);

  const [localRequisiteOptions, setLocalRequisiteOptions] =
    useState(requisitesOptions);

  const [localCompaniesData, setLocalCompaniesData] =
    useState(companiesAllOptions);

  const { currentUser } = useContext(UserContext);
  const { roles, id, name } = currentUser;

  if (!roles.includes("curator")) return <p>Página exclusiva de Curadores</p>;

  const refreshStackAllOptions = async () => {
    const newStackAllOptions = await getAllStackOptions();
    setLocalStackAllOptions(newStackAllOptions);
  };

  const refreshRequisitesOptions = async () => {
    const newStackAllOptions = await getRequisitesOptions();
    setLocalRequisiteOptions(newStackAllOptions);
  };

  const refreshCompanyAutoComplete = async () => {
    const newCompanies = await getAllCompaniesData();
    setLocalCompaniesData(newCompanies);
  };

  return (
    <>
      <JobPostForm
        stackAllOptions={localStackAllOptions}
        requisitesOptions={localRequisiteOptions}
        curatorData={{ id, name }}
        refreshStackAllOptions={refreshStackAllOptions}
        refreshRequisitesOptions={refreshRequisitesOptions}
        refreshCompanyAutoComplete={refreshCompanyAutoComplete}
        createJob={createJob}
        companiesAllOptions={localCompaniesData}
      />
    </>
  );
};

export async function getServerSideProps(context) {
  //Use Promise.all here
  const stackAllOptions = await getAllStackOptions();
  const requisitesOptions = await getRequisitesOptions();
  const companiesAllOptions = await getAllCompaniesData();

  return {
    props: {
      stackAllOptions,
      requisitesOptions,
      companiesAllOptions,
    },
  };
}

export default PostJobPage;
