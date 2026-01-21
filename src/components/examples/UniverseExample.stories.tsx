import type { Meta, StoryObj } from "@storybook/react";
import { UniverseExample } from "./UniverseExample";

const meta: Meta<typeof UniverseExample> = {
  title: "Examples/Admin/Universe",
  component: UniverseExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
