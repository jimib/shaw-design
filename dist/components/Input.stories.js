import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "./Input";
import { Label } from "./Label";
const meta = {
    title: "Components/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "transparent"],
        },
        type: {
            control: { type: "select" },
            options: ["text", "email", "password", "number", "tel", "url"],
        },
    },
};
export default meta;
export const Default = {
    args: {
        placeholder: "Enter text...",
        variant: "default",
    },
};
export const Transparent = {
    args: {
        placeholder: "Transparent input...",
        variant: "transparent",
    },
};
export const WithLabel = {
    render: () => (_jsxs("div", { className: "space-y-2 w-80", children: [_jsx(Label, { htmlFor: "email", children: "Email Address" }), _jsx(Input, { id: "email", type: "email", placeholder: "Enter your email" })] })),
};
export const Required = {
    render: () => (_jsxs("div", { className: "space-y-2 w-80", children: [_jsx(Label, { htmlFor: "required", required: true, children: "Required Field" }), _jsx(Input, { id: "required", placeholder: "This field is required" })] })),
};
export const Disabled = {
    args: {
        placeholder: "Disabled input",
        disabled: true,
    },
};
export const AllTypes = {
    render: () => (_jsxs("div", { className: "space-y-4 w-80", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "text", children: "Text" }), _jsx(Input, { id: "text", type: "text", placeholder: "Text input" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", type: "email", placeholder: "Email input" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "password", children: "Password" }), _jsx(Input, { id: "password", type: "password", placeholder: "Password input" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "number", children: "Number" }), _jsx(Input, { id: "number", type: "number", placeholder: "Number input" })] })] })),
};
export const AllVariants = {
    render: () => (_jsxs("div", { className: "space-y-4 w-80", children: [_jsxs("div", { children: [_jsx(Label, { children: "Default Input" }), _jsx(Input, { placeholder: "Default styling" })] }), _jsxs("div", { children: [_jsx(Label, { children: "Transparent Input" }), _jsx(Input, { variant: "transparent", placeholder: "Transparent styling" })] })] })),
};
