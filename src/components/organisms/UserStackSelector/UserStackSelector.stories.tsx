import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserStackSelector from ".";

export default {
  title: "Organisms/UserStackSelector",
  component: UserStackSelector,
} as ComponentMeta<typeof UserStackSelector>;

const initialSelected = ["HTML", "React Native", "JavaScript"];

const allOptions = [
  {
    name: "Linguagens de Programação",
    stack: ["JavaScript", "PHP", "Ruby", "Java", "C#"],
  },
  {
    name: "Frontend",
    stack: [
      "HTML",
      "CSS",
      "React",
      "Angular",
      "Vue",
      "Svelte",
      "Next",
      "Nuxt",
      "Oxygen",
    ],
  },
  {
    name: "Backend",
    stack: ["Node", "Laravel", "Elixir", "Springboot", "Ruby on Rails"],
  },
  {
    name: "Mobile",
    stack: ["React Native", "Flutter", "Android", "iOS", "Ionic"],
  },
  {
    name: "Low Code",
    stack: ["Wordpress", "Vtex", "Service Now"],
  },
  {
    name: "Devops",
    stack: ["AWS", "Docker", "Terraform"],
  },
];

const Template: ComponentStory<typeof UserStackSelector> = (args) => (
  <UserStackSelector
    initialSelected={initialSelected}
    allOptions={allOptions}
  />
);

export const Default = Template.bind({});
