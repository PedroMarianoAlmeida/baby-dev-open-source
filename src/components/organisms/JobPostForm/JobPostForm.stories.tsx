import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import JobPostForm from ".";

export default {
  title: "Organisms/JobPostForm",
  component: JobPostForm,
} as ComponentMeta<typeof JobPostForm>;

const Template: ComponentStory<typeof JobPostForm> = (args) => <JobPostForm />;

export const Default = Template.bind({});
