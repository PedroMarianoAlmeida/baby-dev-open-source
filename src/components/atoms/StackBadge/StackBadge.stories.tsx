import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StackBadge from "./StackBadge";

export default {
  title: "Components/StackBadge",
  component: StackBadge
} as ComponentMeta<typeof StackBadge>;

const Template: ComponentStory<typeof StackBadge> = (args) => (
  <StackBadge 
    {...args}
  />
);

export const Primary = Template.bind({});

Primary.args = {
  name: "React"
};

