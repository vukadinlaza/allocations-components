import type { Meta, StoryObj } from "@storybook/react";

import Logo from "../components/Logo/Logo";

const meta = {
  title: "Components/Logo",
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => console.log("Click"),
  },
};
