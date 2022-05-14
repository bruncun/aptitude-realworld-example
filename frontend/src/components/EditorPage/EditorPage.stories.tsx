import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EditorPage } from "./EditorPage.component";

export default {
  title: "Components/EditorPage",
  component: EditorPage,
  parameters: {
    layout: "none",
  },
} as ComponentMeta<typeof EditorPage>;

const Template: ComponentStory<typeof EditorPage> = (args) => (
  <EditorPage {...args} />
);

export const Default = Template.bind({});
