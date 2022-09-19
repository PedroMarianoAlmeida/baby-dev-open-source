import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Box from "./Box";

export default {
  title: "Atoms/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "React",
  isSelected: false,
};
