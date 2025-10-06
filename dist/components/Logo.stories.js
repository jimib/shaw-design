import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Logo } from "./Logo";
const meta = {
    title: "Components/Logo",
    component: Logo,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["dark", "light", "shaw"],
        },
        size: {
            control: { type: "number", min: 50, max: 300, step: 10 },
        },
    },
};
export default meta;
export const Dark = {
    args: {
        variant: "dark",
        size: 120,
    },
};
export const Light = {
    args: {
        variant: "light",
        size: 120,
    },
    parameters: {
        backgrounds: { default: "dark" },
    },
};
export const Shaw = {
    args: {
        variant: "shaw",
        size: 120,
    },
};
export const Small = {
    args: {
        variant: "dark",
        size: 80,
    },
};
export const Large = {
    args: {
        variant: "dark",
        size: 200,
    },
};
export const AllVariants = {
    render: () => (_jsxs("div", { className: "flex gap-8 items-center", children: [_jsx("div", { className: "bg-white p-4 rounded-lg", children: _jsx(Logo, { variant: "dark", size: 120 }) }), _jsx("div", { className: "bg-gray-800 p-4 rounded-lg", children: _jsx(Logo, { variant: "light", size: 120 }) }), _jsx("div", { className: "bg-gradient-to-br from-purple-900 to-pink-900 p-4 rounded-lg", children: _jsx(Logo, { variant: "shaw", size: 120 }) })] })),
};
