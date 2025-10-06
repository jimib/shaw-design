import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { Button } from "../Button";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "minimal", "hero"],
    },
    logoVariant: {
      control: { type: "select" },
      options: ["dark", "light", "shaw"],
    },
    showLogo: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Shaw Heritage CMS",
    showLogo: true,
    logoVariant: "shaw",
    actions: (
      <div style={{ display: "flex", gap: "8px" }}>
        <Button variant="outline" size="sm">
          Login
        </Button>
        <Button variant="cms" size="sm">
          Sign Up
        </Button>
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    variant: "minimal",
    title: "Shaw Heritage",
    showLogo: true,
    logoVariant: "shaw",
    logoSize: 32,
  },
};

export const Hero: Story = {
  args: {
    variant: "hero",
    title: "Welcome to Shaw Heritage",
    subtitle: "Preserving history through digital innovation",
    showLogo: true,
    logoVariant: "shaw",
    logoSize: 80,
    actions: (
      <div style={{ display: "flex", gap: "12px" }}>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
        <Button variant="cms" size="lg">
          Get Started
        </Button>
      </div>
    ),
  },
};

export const WithNavigation: Story = {
  render: () => (
    <Header
      title="Shaw Heritage CMS"
      showLogo={true}
      logoVariant="shaw"
      actions={
        <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <a
            href="#"
            style={{ textDecoration: "none", color: "hsl(var(--foreground))" }}
          >
            Dashboard
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "hsl(var(--foreground))" }}
          >
            Collections
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "hsl(var(--foreground))" }}
          >
            Settings
          </a>
          <Button variant="cms" size="sm">
            Profile
          </Button>
        </nav>
      }
    />
  ),
};
