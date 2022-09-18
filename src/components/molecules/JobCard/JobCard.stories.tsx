import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import JobCard from "./JobCard";

export default {
  title: "Components/JobCard",
  component: JobCard
} as ComponentMeta<typeof JobCard>;

const Template: ComponentStory<typeof JobCard> = (args) => (
  <JobCard
    {...args}
  />
);

export const Primary = Template.bind({});

Primary.args = {
  cardData: {
    company: {
      logo: "/public/sample/login-avatar.png",
      name: "Google"
    },
    job: {
      title: "Frontend Developer",
      place: "Remote"
    },
    stack: ["React", "Next", "Typescript"]
  }
};