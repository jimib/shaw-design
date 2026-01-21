import type { Meta, StoryObj } from "@storybook/react";
import { QuickActions } from "./QuickActions";
declare const meta: Meta<typeof QuickActions>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithTitle: Story;
export declare const WithClick: Story;
