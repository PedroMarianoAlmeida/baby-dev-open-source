import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ErrorMessageForm from "./ErrorMessageForm";

export default {
  title: "Atoms/ErrorMessageForm",
  component: ErrorMessageForm,
} as ComponentMeta<typeof ErrorMessageForm>;

const Template: ComponentStory<typeof ErrorMessageForm> = (args) => (
  <ErrorMessageForm {...args}/>
);

export const Default = Template.bind({});

Default.args = {
  name: "React",
  isSelected: false,
  text: "Your Message Here"
};
