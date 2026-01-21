import type { Meta, StoryObj } from "@storybook/react";
import { ContentTable, ContentItem } from "./ContentTable";

const meta: Meta<typeof ContentTable> = {
  title: "Components/ContentTable",
  component: ContentTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleContent: ContentItem[] = [
  {
    id: "1",
    title: "Southern Screen 南國電影 No. 148",
    type: "Magazine",
    mediaType: "PDF",
    issue: "No. 148",
    date: "June 1970",
    origin: "University of Hong Kong Libraries",
  },
  {
    id: "2",
    title: "Southern Screen 南國電影 No. 147",
    type: "Magazine",
    mediaType: "PDF",
    issue: "No. 147",
    date: "May 1970",
    origin: "University of Hong Kong Libraries",
  },
  {
    id: "3",
    title: "邵逸夫和他的黃金時代",
    type: "Book",
    mediaType: "PDF",
    date: "2014",
    origin: "University of Hong Kong Libraries",
  },
  {
    id: "4",
    title: "The Shaw Prize 邵逸夫獎",
    type: "Archival Document",
    mediaType: "PDF",
    date: "2002",
    origin: "University of Hong Kong Libraries",
  },
];

export const Default: Story = {
  args: {
    data: sampleContent,
  },
  render: (args) => (
    <div style={{ width: "1200px" }}>
      <ContentTable {...args} />
    </div>
  ),
};

export const WithSearch: Story = {
  args: {
    data: sampleContent,
    search: "Southern",
  },
  render: (args) => (
    <div style={{ width: "1200px" }}>
      <ContentTable {...args} />
    </div>
  ),
};

export const WithFilter: Story = {
  args: {
    data: sampleContent,
    typeFilter: "Book",
  },
  render: (args) => (
    <div style={{ width: "1200px" }}>
      <ContentTable {...args} />
    </div>
  ),
};

export const WithClick: Story = {
  args: {
    data: sampleContent,
    onRowClick: (item) => alert(`Clicked: ${item.title}`),
  },
  render: (args) => (
    <div style={{ width: "1200px" }}>
      <ContentTable {...args} />
    </div>
  ),
};

export const Empty: Story = {
  args: {
    data: [],
    search: "nonexistent",
  },
  render: (args) => (
    <div style={{ width: "1200px" }}>
      <ContentTable {...args} />
    </div>
  ),
};
