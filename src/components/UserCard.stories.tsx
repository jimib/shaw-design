import type { Meta, StoryObj } from "@storybook/react";
import { UserCard } from "./UserCard";

const meta: Meta<typeof UserCard> = {
  title: "Components/UserCard",
  component: UserCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      name: "Dora",
      email: "doratoihu@gmail.com",
      joined: "03/12/2025",
      role: "User",
    },
  },
};

export const WithClick: Story = {
  args: {
    user: {
      name: "James Liu",
      email: "james@example.com",
      joined: "01/01/2024",
      role: "Admin",
    },
    onClick: () => alert("User clicked!"),
  },
};

export const NoRole: Story = {
  args: {
    user: {
      name: "John Doe",
      email: "john@example.com",
      joined: "15/06/2024",
    },
  },
};

export const List: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "400px" }}>
      <UserCard
        user={{
          name: "Dora",
          email: "doratoihu@gmail.com",
          joined: "03/12/2025",
          role: "User",
        }}
      />
      <UserCard
        user={{
          name: "wenkaihu",
          email: "wenkaihu@revival-heritage.com",
          joined: "29/10/2025",
          role: "User",
        }}
      />
      <UserCard
        user={{
          name: "HWK0808",
          email: "hwk0808@outlook.com",
          joined: "23/10/2025",
          role: "User",
        }}
      />
    </div>
  ),
};
