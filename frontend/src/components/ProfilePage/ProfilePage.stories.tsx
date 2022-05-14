import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProfilePage } from "./ProfilePage.component";

export default {
  title: "Components/ProfilePage",
  component: ProfilePage,
  parameters: {
    layout: "none",
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Default = Template.bind({});
