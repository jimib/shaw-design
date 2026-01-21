import type { Meta, StoryObj } from "@storybook/react";
import { ExhibitionExample } from "./ExhibitionExample";

const meta: Meta<typeof ExhibitionExample> = {
  title: "Examples/Exhibition",
  component: ExhibitionExample,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
