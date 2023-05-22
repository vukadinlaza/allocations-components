import type { Meta, StoryObj } from "@storybook/react";

import FeedBack from "../components/FeedBack";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/FeedBack",
  component: FeedBack,
  tags: ["autodocs"],
} satisfies Meta<typeof FeedBack>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  // args: {
  //   label: "Button",
  //   loading: false,
  // },
};
