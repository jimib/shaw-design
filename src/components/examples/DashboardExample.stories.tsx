import type { Meta, StoryObj } from "@storybook/react";
import { DashboardExample } from "./DashboardExample";

const meta: Meta<typeof DashboardExample> = {
  title: "Examples/DashboardExample",
  component: DashboardExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
