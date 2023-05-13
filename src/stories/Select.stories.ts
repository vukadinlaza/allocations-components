import type { Meta, StoryObj } from "@storybook/react";

import Select from "../components/Select/Select";

const meta = {
  title: "Components/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: ["item1", "item2"],
    onChange: () => console.log("changed items"),
    selected: "item1",
  },
};
