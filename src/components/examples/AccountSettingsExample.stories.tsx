import type { Meta, StoryObj } from "@storybook/react";
import { AccountSettingsExample } from "./AccountSettingsExample";

const meta: Meta<typeof AccountSettingsExample> = {
  title: "Examples/AccountSettings",
  component: AccountSettingsExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
