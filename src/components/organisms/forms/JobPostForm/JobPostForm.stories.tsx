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

const Template: ComponentStory<typeof JobPostForm> = (args) => (
  <JobPostForm
    stackAllOptions={[stackAllOptions]}
    curatorData={curatorData}
    refreshStackAllOptions={refreshStackAllOptions}
  />
);

export const Default = Template.bind({});
