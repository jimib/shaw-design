import type { Meta, StoryObj } from "@storybook/react";
import { CurateNewArticleExample } from "./CurateNewArticleExample";

const meta: Meta<typeof CurateNewArticleExample> = {
  title: "Examples/Curate/NewArticle",
  component: CurateNewArticleExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
