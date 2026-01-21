import type { Meta, StoryObj } from "@storybook/react";
import { ArchiveLibraryExample } from "./ArchiveLibraryExample";

const meta: Meta<typeof ArchiveLibraryExample> = {
  title: "Examples/Archive/Library",
  component: ArchiveLibraryExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
