import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SettingsPage } from "./SettingsPage.component";

export default {
  title: "Components/SettingsPage",
  component: SettingsPage,
  parameters: {
    layout: "none",
  },
} as ComponentMeta<typeof SettingsPage>;

const Template: ComponentStory<typeof SettingsPage> = (args) => (
  <SettingsPage {...args} />
);

export const Default = Template.bind({});
