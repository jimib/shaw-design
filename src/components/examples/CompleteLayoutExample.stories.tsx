import type { Meta, StoryObj } from "@storybook/react";
import {
  CompleteLayoutExample,
  AuthLayoutExample,
} from "./CompleteLayoutExample";

const meta: Meta<typeof CompleteLayoutExample> = {
  title: "Examples/Complete Layout",
  component: CompleteLayoutExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  render: () => <CompleteLayoutExample />,
};

export const Auth: Story = {
  render: () => <AuthLayoutExample />,
};

