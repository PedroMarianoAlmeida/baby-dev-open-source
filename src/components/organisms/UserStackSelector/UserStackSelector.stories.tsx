import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UserStackSelectorStructure } from "./UserStackSelector";

export default {
  title: "Organisms/UserStackSelector",
  component: UserStackSelectorStructure,
} as ComponentMeta<typeof UserStackSelectorStructure>;

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

const Template: ComponentStory<typeof UserStackSelectorStructure> = (args) => (
  <UserStackSelectorStructure
    initialSelected={initialSelected}
    allOptions={allOptions}
    onChange={() => {}}
  />
);

export const Default = Template.bind({});
