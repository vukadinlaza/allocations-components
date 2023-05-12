import type { Meta, StoryObj } from "@storybook/react";

import MissingData from "../components/MissingData/MissingData";

const meta: Meta<typeof MissingData> = {
  title: "Components/MissingData",
  component: MissingData,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Data not found? Contact us to let us know!",
    btnLabel: "Contact us",
  },
};
