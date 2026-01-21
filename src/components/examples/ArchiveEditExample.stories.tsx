import type { Meta, StoryObj } from "@storybook/react";
import { ArchiveEditExample } from "./ArchiveEditExample";

const meta: Meta<typeof ArchiveEditExample> = {
  title: "Examples/Archive/Edit",
  component: ArchiveEditExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
