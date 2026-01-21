import type { Meta, StoryObj } from "@storybook/react";
import { CurateArticlesExample } from "./CurateArticlesExample";

const meta: Meta<typeof CurateArticlesExample> = {
  title: "Examples/Curate/Articles",
  component: CurateArticlesExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
