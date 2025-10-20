import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Status } from "./Status";
const meta = {
    title: "Components/Status",
    component: Status,
    args: {
        value: "green",
        variant: "solid",
        size: "md",
    },
    argTypes: {
        value: {
            control: { type: "inline-radio" },
            options: ["green", "orange", "red"],
        },
        variant: {
            control: { type: "inline-radio" },
            options: ["solid", "outline"],
        },
        size: {
            control: { type: "inline-radio" },
            options: ["sm", "md", "lg"],
        },
    },
};
export default meta;
export const SolidGreen = { args: { value: "green", variant: "solid" } };
export const SolidOrange = {
    args: { value: "orange", variant: "solid" },
};
export const SolidRed = { args: { value: "red", variant: "solid" } };
export const OutlineGreen = {
    args: { value: "green", variant: "outline" },
};
export const OutlineOrange = {
    args: { value: "orange", variant: "outline" },
};
export const OutlineRed = { args: { value: "red", variant: "outline" } };
export const Sizes = () => (_jsxs("div", { style: { display: "flex", gap: 12, alignItems: "center" }, children: [_jsx(Status, { value: "green", size: "sm" }), _jsx(Status, { value: "green", size: "md" }), _jsx(Status, { value: "green", size: "lg" })] }));
