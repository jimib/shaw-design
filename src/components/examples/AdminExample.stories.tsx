import type { Meta, StoryObj } from "@storybook/react";
import { AdminExample } from "./AdminExample";

const meta: Meta<typeof AdminExample> = {
  title: "Examples/Admin/Admin",
  component: AdminExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
