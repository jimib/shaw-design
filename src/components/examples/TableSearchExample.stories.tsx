import type { Meta, StoryObj } from "@storybook/react";
import { TableSearchExample } from "./TableSearchExample";

const meta: Meta<typeof TableSearchExample> = {
  title: "Examples/TableSearchExample",
  component: TableSearchExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
