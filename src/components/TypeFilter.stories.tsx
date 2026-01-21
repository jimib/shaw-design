import type { Meta, StoryObj } from "@storybook/react";
import { TypeFilter } from "./TypeFilter";
import { useState } from "react";

const meta: Meta<typeof TypeFilter> = {
  title: "Components/TypeFilter",
  component: TypeFilter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("All Types");
    return <TypeFilter value={value} onChange={setValue} />;
  },
};

export const WithSelection: Story = {
  render: () => {
    const [value, setValue] = useState("Book");
    return <TypeFilter value={value} onChange={setValue} />;
  },
};
