import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "./Select";

export default {
  title: "Atoms/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "React",
  errors: {},
  options: [
    { id: 1, value: "option1" },
    { id: 2, value: "option2" },
  ],
  isSelected: false,
};
