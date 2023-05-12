import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button/Button";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    loading: false,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: "Button",
    loading: true,
  },
};
