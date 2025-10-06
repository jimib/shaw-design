import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
declare const meta: Meta<typeof Header>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Minimal: Story;
export declare const Hero: Story;
export declare const WithNavigation: Story;
