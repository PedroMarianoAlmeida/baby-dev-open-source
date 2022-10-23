import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import JobPostForm from ".";

export default {
  title: "Organisms/JobPostForm",
  component: JobPostForm,
} as ComponentMeta<typeof JobPostForm>;

const stackAllOptions = [{ id: 1, name: "stackName", stack: ["react"] }];
const requisitesOptions = [{ id: 1, value: "RequisiteValue" }];
const curatorData = { id: 1, name: "CuratorName" };
const companiesAllOptions = [
  {
    id: 1,
    name: "CompanyName",
    logo: "CompanyLogo",
    webSite: "CompanyWebSite",
    linkedin: "CompanyLinkedIn",
  },
];

const Template: ComponentStory<typeof JobPostForm> = (args) => (
  <JobPostForm
    stackAllOptions={stackAllOptions}
    requisitesOptions={requisitesOptions}
    curatorData={curatorData}
    refreshStackAllOptions={() => {}}
    refreshRequisitesOptions={() => {}}
    refreshCompanyAutoComplete={() => {}}
    createJob={Promise.resolve}
    companiesAllOptions={companiesAllOptions}
  />
);

export const Default = Template.bind({});
