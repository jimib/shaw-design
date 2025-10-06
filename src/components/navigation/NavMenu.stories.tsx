import type { Meta, StoryObj } from "@storybook/react";
import { NavMenu, NavMenuItem, NavMenuTrigger } from "./NavMenu";

const meta: Meta<typeof NavMenu> = {
  title: "Navigation/NavMenu",
  component: NavMenu,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "pills", "underline"],
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <NavMenuItem active>
          <a href="#">Dashboard</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Collections</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Media</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Settings</a>
        </NavMenuItem>
      </>
    ),
  },
};

export const Pills: Story = {
  args: {
    variant: "pills",
    children: (
      <>
        <NavMenuItem active>
          <a href="#">All</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Recent</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Favorites</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Archived</a>
        </NavMenuItem>
      </>
    ),
  },
};

export const Underline: Story = {
  args: {
    variant: "underline",
    children: (
      <>
        <NavMenuItem active>
          <a href="#">Overview</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Details</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">History</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Settings</a>
        </NavMenuItem>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    children: (
      <>
        <NavMenuItem active>
          <a href="#">Dashboard</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Collections</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Media</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Users</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Settings</a>
        </NavMenuItem>
      </>
    ),
  },
};

export const WithTriggers: Story = {
  render: () => (
    <NavMenu>
      <NavMenuItem>
        <a href="#">Home</a>
      </NavMenuItem>
      <NavMenuItem>
        <NavMenuTrigger onClick={() => console.log("Dropdown clicked")}>
          Collections ▼
        </NavMenuTrigger>
      </NavMenuItem>
      <NavMenuItem>
        <a href="#">Media</a>
      </NavMenuItem>
      <NavMenuItem>
        <a href="#">Settings</a>
      </NavMenuItem>
    </NavMenu>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h3>Default</h3>
        <NavMenu>
          <NavMenuItem active>
            <a href="#">Dashboard</a>
          </NavMenuItem>
          <NavMenuItem>
            <a href="#">Collections</a>
          </NavMenuItem>
          <NavMenuItem>
            <a href="#">Media</a>
          </NavMenuItem>
        </NavMenu>
      </div>

      <div>
        <h3>Pills</h3>
        <NavMenu variant="pills">
          <NavMenuItem active>
            <a href="#">All</a>
          </NavMenuItem>
          <NavMenuItem>
            <a href="#">Recent</a>
          </NavMenuItem>
          <NavMenuItem>
            <a href="#">Favorites</a>
          </NavMenuItem>
        </NavMenu>
      </div>

      <div>
        <h3>Underline</h3>
        <NavMenu variant="underline">
          <NavMenuItem active>
            <a href="#">Overview</a>
          </NavMenuItem>
          <NavMenuItem>
            <a href="#">Details</a>
          </NavMenuItem>
          <NavMenuItem>
            <a href="#">History</a>
          </NavMenuItem>
        </NavMenu>
      </div>
    </div>
  ),
};
