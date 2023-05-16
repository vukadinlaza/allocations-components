import type { Meta, StoryObj } from "@storybook/react";

import DangerZone from "../components/DangerZone/DangerZone";

const meta: Meta<typeof DangerZone> = {
  title: "Components/DangerZone",
  component: DangerZone,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "This action is irreversible and will permanently delete all the data associated with this element.",
    onClick: () => console.log("Clicked"),
    toCheck: "to check",
  },
};
