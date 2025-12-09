import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./Separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        height: "100px",
      }}
    >
      <span>Left content</span>
      <Separator {...args} />
      <span>Right content</span>
    </div>
  ),
};

export const InContent: Story = {
  render: () => (
    <div style={{ maxWidth: "400px" }}>
      <h3>Section 1</h3>
      <p>This is the first section of content.</p>

      <Separator style={{ margin: "16px 0" }} />

      <h3>Section 2</h3>
      <p>
        This is the second section of content, separated by a horizontal line.
      </p>

      <Separator style={{ margin: "16px 0" }} />

      <h3>Section 3</h3>
      <p>This is the third section of content.</p>
    </div>
  ),
};

export const InNavigation: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px",
        background: "hsl(var(--muted))",
        borderRadius: "8px",
      }}
    >
      <a
        href="#"
        style={{ textDecoration: "none", color: "hsl(var(--foreground))" }}
      >
        Home
      </a>
      <a
        href="#"
        style={{ textDecoration: "none", color: "hsl(var(--foreground))" }}
      >
        About
      </a>
      <a
        href="#"
        style={{ textDecoration: "none", color: "hsl(var(--foreground))" }}
      >
        Services
      </a>

      <Separator orientation="vertical" style={{ height: "20px" }} />

      <a
        href="#"
        style={{ textDecoration: "none", color: "hsl(var(--foreground))" }}
      >
        Contact
      </a>
      <a
        href="#"
        style={{ textDecoration: "none", color: "hsl(var(--foreground))" }}
      >
        Help
      </a>
    </div>
  ),
};

export const AllOrientations: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h3>Horizontal Separators</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span>Content above</span>
          <Separator />
          <span>Content below</span>
        </div>
      </div>

      <div>
        <h3>Vertical Separators</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            height: "60px",
          }}
        >
          <span>Left</span>
          <Separator orientation="vertical" />
          <span>Center</span>
          <Separator orientation="vertical" />
          <span>Right</span>
        </div>
      </div>
    </div>
  ),
};

