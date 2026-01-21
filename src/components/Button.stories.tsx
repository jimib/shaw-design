import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Plus, Search, ArrowRight, Download, Upload } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "accent", "outline", "ghost", "cms"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    compact: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Click me",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    children: "Click me",
    variant: "secondary",
    size: "md",
  },
};

export const Accent: Story = {
  args: {
    children: "Click me",
    variant: "accent",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    children: "Click me",
    variant: "outline",
    size: "md",
  },
};

export const Ghost: Story = {
  args: {
    children: "Click me",
    variant: "ghost",
    size: "md",
  },
};

export const CMS: Story = {
  args: {
    children: "Sign In",
    variant: "cms",
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    variant: "primary",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    variant: "primary",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "primary",
    size: "md",
    disabled: true,
  },
};

export const Compact: Story = {
  args: {
    children: "Compact Button",
    variant: "primary",
    size: "md",
    compact: true,
  },
};

export const CompactComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 items-center">
        <span className="text-sm text-gray-600">Normal:</span>
        <Button variant="primary" size="sm">
          Small
        </Button>
        <Button variant="primary" size="md">
          Medium
        </Button>
        <Button variant="primary" size="lg">
          Large
        </Button>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <span className="text-sm text-gray-600">Compact:</span>
        <Button variant="primary" size="sm" compact>
          Small
        </Button>
        <Button variant="primary" size="md" compact>
          Medium
        </Button>
        <Button variant="primary" size="lg" compact>
          Large
        </Button>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="cms">CMS</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="primary" icon={Plus} iconPosition="left">
          Add Item
        </Button>
        <Button variant="outline" icon={Search} iconPosition="left">
          Search
        </Button>
        <Button variant="ghost" icon={ArrowRight} iconPosition="right">
          Continue
        </Button>
        <Button variant="cms" icon={Upload} iconPosition="left">
          Upload
        </Button>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="primary" size="sm" icon={Download} iconPosition="left">
          Download
        </Button>
        <Button variant="outline" size="sm" icon={Search} iconPosition="right">
          Search
        </Button>
        <Button variant="primary" size="lg" icon={Plus} iconPosition="left">
          Create New
        </Button>
      </div>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary" size="sm" icon={Plus} iconPosition="left" aria-label="Add">
        <span style={{ width: 0, height: 0, overflow: "hidden" }}>Add</span>
      </Button>
      <Button variant="outline" size="sm" icon={Search} iconPosition="left" aria-label="Search">
        <span style={{ width: 0, height: 0, overflow: "hidden" }}>Search</span>
      </Button>
      <Button variant="ghost" size="md" icon={Download} iconPosition="left" aria-label="Download">
        <span style={{ width: 0, height: 0, overflow: "hidden" }}>Download</span>
      </Button>
    </div>
  ),
};
