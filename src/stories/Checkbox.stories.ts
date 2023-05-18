import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "../components/Checkbox/Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: () => console.log("changed"),
    label: "test",
    selected: false,
  },
};
