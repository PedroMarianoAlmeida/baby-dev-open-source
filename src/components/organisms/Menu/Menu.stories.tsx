import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu from "./";

export default {
  title: "Organisms/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu />;

export const Default = Template.bind({});
