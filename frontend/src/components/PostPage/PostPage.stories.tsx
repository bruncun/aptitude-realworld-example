import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PostPage } from "./PostPage.component";

export default {
  title: "Components/PostPage",
  component: PostPage,
  parameters: {
    layout: "none",
  },
} as ComponentMeta<typeof PostPage>;

const Template: ComponentStory<typeof PostPage> = (args) => (
  <PostPage {...args} />
);

export const Default = Template.bind({});
