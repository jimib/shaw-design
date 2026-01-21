import type { Meta, StoryObj } from "@storybook/react";
import { ArchiveUploadExample } from "./ArchiveUploadExample";

const meta: Meta<typeof ArchiveUploadExample> = {
  title: "Examples/Archive/Upload",
  component: ArchiveUploadExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
