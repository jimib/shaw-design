import type { Meta, StoryObj } from "@storybook/react";
import { NotFoundExample } from "./NotFoundExample";

const meta: Meta<typeof NotFoundExample> = {
  title: "Examples/NotFound",
  component: NotFoundExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
