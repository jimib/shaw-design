import type { Meta, StoryObj } from "@storybook/react";
import { UserCard } from "./UserCard";
declare const meta: Meta<typeof UserCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithClick: Story;
export declare const NoRole: Story;
export declare const List: Story;
