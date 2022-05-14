import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AuthPage } from "./AuthPage.component";

export default {
  title: "Components/AuthPage",
  component: AuthPage,
  parameters: {
    layout: "none",
  },
} as ComponentMeta<typeof AuthPage>;

const Template: ComponentStory<typeof AuthPage> = (args) => (
  <AuthPage {...args} />
);

export const SignUp = Template.bind({});

export const SignIn = Template.bind({});
SignIn.args = {
  isSignIn: true,
};
