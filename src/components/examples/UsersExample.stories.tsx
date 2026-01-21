import type { Meta, StoryObj } from "@storybook/react";
import { UsersExample } from "./UsersExample";

const meta: Meta<typeof UsersExample> = {
  title: "Examples/Admin/Users",
  component: UsersExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
