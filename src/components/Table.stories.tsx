import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableColumn } from "./Table";
import { useState } from "react";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

interface SampleData {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const sampleData: SampleData[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Inactive" },
];

const columns: TableColumn<SampleData>[] = [
  { key: "name", label: "Name", sortable: true },
  { key: "email", label: "Email", sortable: true },
  { key: "role", label: "Role", sortable: true },
  { key: "status", label: "Status", sortable: true },
];

export const Default: Story = {
  render: () => {
    const [sortKey, setSortKey] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(null);

    const handleSort = (key: string) => {
      if (sortKey === key) {
        if (sortDirection === "asc") {
          setSortDirection("desc");
        } else if (sortDirection === "desc") {
          setSortKey(null);
          setSortDirection(null);
        } else {
          setSortDirection("asc");
        }
      } else {
        setSortKey(key);
        setSortDirection("asc");
      }
    };

    return (
      <div style={{ width: "800px" }}>
        <Table
          columns={columns}
          data={sampleData}
          sortKey={sortKey}
          sortDirection={sortDirection}
          onSort={handleSort}
        />
      </div>
    );
  },
};

export const WithClick: Story = {
  render: () => {
    return (
      <div style={{ width: "800px" }}>
        <Table
          columns={columns}
          data={sampleData}
          onRowClick={(row) => alert(`Clicked: ${row.name}`)}
        />
      </div>
    );
  },
};

export const WithCustomRender: Story = {
  render: () => {
    const customColumns: TableColumn<SampleData>[] = [
      { key: "name", label: "Name", sortable: true },
      {
        key: "status",
        label: "Status",
        sortable: true,
        render: (value) => (
          <span
            style={{
              padding: "4px 8px",
              borderRadius: "4px",
              background: value === "Active" ? "hsl(142 76% 36% / 0.1)" : "hsl(var(--muted))",
              color: value === "Active" ? "hsl(142 76% 36%)" : "hsl(var(--muted-foreground))",
              fontSize: "12px",
            }}
          >
            {value}
          </span>
        ),
      },
    ];

    return (
      <div style={{ width: "600px" }}>
        <Table columns={customColumns} data={sampleData} />
      </div>
    );
  },
};
