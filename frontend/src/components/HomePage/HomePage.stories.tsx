import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HomePage } from "./HomePage.component";

export default {
  title: "Components/HomePage",
  component: HomePage,
  parameters: {
    layout: "none",
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => (
  <HomePage {...args} />
);

export const Default = Template.bind({});
