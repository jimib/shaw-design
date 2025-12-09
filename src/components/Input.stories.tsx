import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Label } from "./Label";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "transparent"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    variant: "default",
  },
};

export const Transparent: Story = {
  args: {
    placeholder: "Transparent input...",
    variant: "transparent",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Label htmlFor="required" required>
        Required Field
      </Label>
      <Input id="required" placeholder="This field is required" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <Label htmlFor="text">Text</Label>
        <Input id="text" type="text" placeholder="Text input" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Email input" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Password input" />
      </div>
      <div>
        <Label htmlFor="number">Number</Label>
        <Input id="number" type="number" placeholder="Number input" />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <Label>Default Input</Label>
        <Input placeholder="Default styling" />
      </div>
      <div>
        <Label>Transparent Input</Label>
        <Input variant="transparent" placeholder="Transparent styling" />
      </div>
    </div>
  ),
};

