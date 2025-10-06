import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
declare const meta: Meta<typeof Sidebar>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Floating: Story;
export declare const WithGroups: Story;
