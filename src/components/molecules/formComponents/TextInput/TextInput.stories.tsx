import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextInput from "./TextInput";

export default {
  title: "Atoms/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});

Default.args = {
  name: "React",
  errors: {},
  isSelected: false,
};
