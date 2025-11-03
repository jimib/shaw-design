import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Status, StatusProps } from "./Status";

const meta: Meta<StatusProps> = {
  title: "Components/Status",
  component: Status,
  args: {
    value: "green",
    variant: "solid",
    size: "md",
  },
  argTypes: {
    value: {
      control: { type: "inline-radio" },
      options: ["green", "orange", "red", "gray"],
    },
    variant: {
      control: { type: "inline-radio" },
      options: ["solid", "outline"],
    },
    size: {
      control: { type: "inline-radio" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Status>;

export const SolidGreen: Story = { args: { value: "green", variant: "solid" } };
export const SolidOrange: Story = {
  args: { value: "orange", variant: "solid" },
};
export const SolidRed: Story = { args: { value: "red", variant: "solid" } };
export const SolidGray: Story = { args: { value: "gray", variant: "solid" } };

export const OutlineGreen: Story = {
  args: { value: "green", variant: "outline" },
};
export const OutlineOrange: Story = {
  args: { value: "orange", variant: "outline" },
};
export const OutlineRed: Story = { args: { value: "red", variant: "outline" } };
export const OutlineGray: Story = {
  args: { value: "gray", variant: "outline" },
};

export const Sizes: React.FC = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
    <Status value="green" size="sm" />
    <Status value="green" size="md" />
    <Status value="green" size="lg" />
  </div>
);
