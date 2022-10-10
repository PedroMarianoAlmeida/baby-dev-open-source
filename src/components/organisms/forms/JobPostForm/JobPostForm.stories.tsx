import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import JobPostForm from ".";

export default {
  title: "Organisms/JobPostForm",
  component: JobPostForm,
} as ComponentMeta<typeof JobPostForm>;

const stackAllOptions = {
  id: "1",
  name: "Stack Group",
  stack: ["stack1", "stack2", "stack3"],
};
const curatorData = {
  id: "1",
  name: "Curator Name",
};
const refreshStackAllOptions = () => {};
const requisitesOptions = [{ id: "1", value: "Requisite 1" }];
const refreshRequisitesOptions = () => {};

const Template: ComponentStory<typeof JobPostForm> = (args) => (
  <JobPostForm
    stackAllOptions={[stackAllOptions]}
    curatorData={curatorData}
    refreshStackAllOptions={refreshStackAllOptions}
    requisitesOptions={requisitesOptions}
    refreshRequisitesOptions={refreshRequisitesOptions}
    createJob={async () => ""}
  />
);

export const Default = Template.bind({});
