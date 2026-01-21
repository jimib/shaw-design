import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
declare const meta: Meta<typeof Table>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithClick: Story;
export declare const WithCustomRender: Story;
