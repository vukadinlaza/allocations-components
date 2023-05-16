import type { Meta, StoryObj } from "@storybook/react";

import None from "../components/None/None";

const meta: Meta<typeof None> = {
  title: "Components/None",
  component: None,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Sorry, no data",
  },
};
