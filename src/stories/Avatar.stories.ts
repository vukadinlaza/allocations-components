import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "../components/Avatar/Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const menu = [
  {
    title: "Logout",
    action: async () => {
      console.log("logged out");
    },
  },
  {
    title: "My Identities",
    action: () => {
      console.log("pressed my indentities");
    },
  },
];

export const Default: Story = {
  args: {
    email: "Artur",
    menuItems: menu,
  },
};
