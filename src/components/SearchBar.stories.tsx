import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";
import { useState } from "react";

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div style={{ width: "400px" }}>
        <SearchBar value={value} onChange={setValue} placeholder="Search..." />
      </div>
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState("Southern Screen");
    return (
      <div style={{ width: "400px" }}>
        <SearchBar value={value} onChange={setValue} placeholder="Search content..." />
      </div>
    );
  },
};

export const CustomPlaceholder: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div style={{ width: "400px" }}>
        <SearchBar
          value={value}
          onChange={setValue}
          placeholder="Search titles, keywords, content..."
        />
      </div>
    );
  },
};
