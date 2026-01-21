import type { Meta, StoryObj } from "@storybook/react";
import { StatsCard } from "./StatsCard";
import { Archive, Feather, Globe, Users } from "lucide-react";

const meta: Meta<typeof StatsCard> = {
  title: "Components/StatsCard",
  component: StatsCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Archive Items",
    value: "2,847",
    change: "+12 this week",
    icon: Archive,
  },
};

export const WithLink: Story = {
  args: {
    label: "Articles",
    value: "156",
    change: "+3 this week",
    icon: Feather,
    href: "#",
  },
};

export const WithClick: Story = {
  args: {
    label: "Exhibition Visitors",
    value: "1,247",
    change: "+89 this week",
    icon: Globe,
    onClick: () => alert("Clicked!"),
  },
};

export const NoChange: Story = {
  args: {
    label: "Connected Domains",
    value: "3",
    icon: Users,
  },
};

export const Grid: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        width: "100%",
        maxWidth: "1200px",
      }}
    >
      <StatsCard
        label="Archive Items"
        value="2,847"
        change="+12 this week"
        icon={Archive}
      />
      <StatsCard
        label="Articles"
        value="156"
        change="+3 this week"
        icon={Feather}
      />
      <StatsCard
        label="Exhibition Visitors"
        value="1,247"
        change="+89 this week"
        icon={Globe}
      />
      <StatsCard label="Connected Domains" value="3" change="All active" icon={Users} />
    </div>
  ),
};
