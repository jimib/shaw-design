import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["dark", "light", "shaw"],
    },
    size: {
      control: { type: "number", min: 50, max: 300, step: 10 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    variant: "dark",
    size: 120,
  },
};

export const Light: Story = {
  args: {
    variant: "light",
    size: 120,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Shaw: Story = {
  args: {
    variant: "shaw",
    size: 120,
  },
};

export const Small: Story = {
  args: {
    variant: "dark",
    size: 80,
  },
};

export const Large: Story = {
  args: {
    variant: "dark",
    size: 200,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <div className="bg-white p-4 rounded-lg">
        <Logo variant="dark" size={120} />
      </div>
      <div className="bg-gray-800 p-4 rounded-lg">
        <Logo variant="light" size={120} />
      </div>
      <div className="bg-gradient-to-br from-purple-900 to-pink-900 p-4 rounded-lg">
        <Logo variant="shaw" size={120} />
      </div>
    </div>
  ),
};
