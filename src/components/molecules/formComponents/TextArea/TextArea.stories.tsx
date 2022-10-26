import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextArea from "./TextArea";

export default {
  title: "Atoms/TextArea",
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});

Default.args = {
  name: "React",
  errors: {},
  isSelected: false,
};
