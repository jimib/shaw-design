import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";
declare const meta: Meta<typeof SearchBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithValue: Story;
export declare const CustomPlaceholder: Story;
