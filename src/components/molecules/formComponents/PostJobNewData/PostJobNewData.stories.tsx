import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PostJobNewData from "./PostJobNewData";

export default {
  title: "Atoms/PostJobNewData",
  component: PostJobNewData,
} as ComponentMeta<typeof PostJobNewData>;

const Template: ComponentStory<typeof PostJobNewData> = (args) => (
  <PostJobNewData {...args} />
);

export const Default = Template.bind({});

Default.args = {
  name: "React",
  href: "/yourlink",
  notFoundText: "example",
  updateText: "example",
  updateField: () => {},
  isSelected: false,
};
