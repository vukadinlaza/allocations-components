import type { Meta, StoryObj } from "@storybook/react";

import Feedback from "../components/FeedBack/Feedback";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Feedback",
  component: Feedback,
  tags: ["autodocs"],
} satisfies Meta<typeof Feedback>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  // args: {
  //   label: "Button",
  //   loading: false,
  // },
};
