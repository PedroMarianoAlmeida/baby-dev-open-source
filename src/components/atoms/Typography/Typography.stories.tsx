import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "./Typography";

export default {
  title: Typography.name,
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const H1: ComponentStory<typeof Typography> = () => (
  <Typography variant="h1">Typography</Typography>
);

export const H2: ComponentStory<typeof Typography> = () => (
  <Typography variant="h2">Typography</Typography>
);
