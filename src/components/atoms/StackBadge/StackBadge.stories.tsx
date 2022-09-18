import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StackBadge from "./StackBadge";

export default {
  title: "Atoms/StackBadge",
  component: StackBadge,
} as ComponentMeta<typeof StackBadge>;

const Template: ComponentStory<typeof StackBadge> = (args) => (
  <StackBadge {...args} />
);

export const Default = Template.bind({});

Default.args = {
  name: "React",
  isSelected: false,
};
