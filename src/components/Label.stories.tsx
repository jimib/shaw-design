import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";
import { Input } from "./Input";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    required: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Label",
  },
};

export const Required: Story = {
  args: {
    children: "Required Label",
    required: true,
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Label htmlFor="example">Example Label</Label>
      <Input id="example" placeholder="Associated input" />
    </div>
  ),
};

export const RequiredWithInput: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Label htmlFor="required" required>
        Required Field
      </Label>
      <Input id="required" placeholder="This field is required" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <Label>Optional Field</Label>
        <Input placeholder="This field is optional" />
      </div>
      <div>
        <Label required>Required Field</Label>
        <Input placeholder="This field is required" />
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
    </div>
  ),
};
