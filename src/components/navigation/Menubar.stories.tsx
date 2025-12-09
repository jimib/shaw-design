import type { Meta, StoryObj } from "@storybook/react";
import { Menubar, MenubarItem, MenubarSeparator } from "./Menubar";

const meta: Meta<typeof Menubar> = {
  title: "Navigation/Menubar",
  component: Menubar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "minimal", "bordered"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <MenubarItem active>File</MenubarItem>
        <MenubarItem>Edit</MenubarItem>
        <MenubarItem>View</MenubarItem>
        <MenubarItem>Tools</MenubarItem>
        <MenubarItem>Help</MenubarItem>
      </>
    ),
  },
};

export const Minimal: Story = {
  args: {
    variant: "minimal",
    children: (
      <>
        <MenubarItem active>Dashboard</MenubarItem>
        <MenubarItem>Collections</MenubarItem>
        <MenubarItem>Media</MenubarItem>
        <MenubarItem>Settings</MenubarItem>
      </>
    ),
  },
};

export const Bordered: Story = {
  args: {
    variant: "bordered",
    children: (
      <>
        <MenubarItem active>Home</MenubarItem>
        <MenubarItem>About</MenubarItem>
        <MenubarItem>Services</MenubarItem>
        <MenubarItem>Contact</MenubarItem>
      </>
    ),
  },
};

export const WithSeparators: Story = {
  args: {
    children: (
      <>
        <MenubarItem active>File</MenubarItem>
        <MenubarItem>Edit</MenubarItem>
        <MenubarItem>View</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Tools</MenubarItem>
        <MenubarItem>Help</MenubarItem>
      </>
    ),
  },
};

export const WithActions: Story = {
  render: () => (
    <Menubar>
      <MenubarItem active>Dashboard</MenubarItem>
      <MenubarItem>Collections</MenubarItem>
      <MenubarItem>Media</MenubarItem>
      <MenubarSeparator />
      <MenubarItem onClick={() => console.log("Settings clicked")}>
        Settings
      </MenubarItem>
      <MenubarItem onClick={() => console.log("Help clicked")}>
        Help
      </MenubarItem>
    </Menubar>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h3>Default</h3>
        <Menubar>
          <MenubarItem active>File</MenubarItem>
          <MenubarItem>Edit</MenubarItem>
          <MenubarItem>View</MenubarItem>
        </Menubar>
      </div>

      <div>
        <h3>Minimal</h3>
        <Menubar variant="minimal">
          <MenubarItem active>Dashboard</MenubarItem>
          <MenubarItem>Collections</MenubarItem>
          <MenubarItem>Media</MenubarItem>
        </Menubar>
      </div>

      <div>
        <h3>Bordered</h3>
        <Menubar variant="bordered">
          <MenubarItem active>Home</MenubarItem>
          <MenubarItem>About</MenubarItem>
          <MenubarItem>Contact</MenubarItem>
        </Menubar>
      </div>
    </div>
  ),
};

