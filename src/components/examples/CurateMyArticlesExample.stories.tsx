import type { Meta, StoryObj } from "@storybook/react";
import { CurateMyArticlesExample } from "./CurateMyArticlesExample";

const meta: Meta<typeof CurateMyArticlesExample> = {
  title: "Examples/Curate/MyArticles",
  component: CurateMyArticlesExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
