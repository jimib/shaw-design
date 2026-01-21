import type { Meta, StoryObj } from "@storybook/react";
import { ActivityFeed } from "./ActivityFeed";
declare const meta: Meta<typeof ActivityFeed>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithTitle: Story;
export declare const WithViewAll: Story;
export declare const WithClick: Story;
