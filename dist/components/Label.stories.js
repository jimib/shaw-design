import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from "./Label";
import { Input } from "./Input";
const meta = {
    title: "Components/Label",
    component: Label,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        required: {
            control: { type: "boolean" },
        },
    },
};
export default meta;
export const Default = {
    args: {
        children: "Default Label",
    },
};
export const Required = {
    args: {
        children: "Required Label",
        required: true,
    },
};
export const WithInput = {
    render: () => (_jsxs("div", { className: "space-y-2 w-80", children: [_jsx(Label, { htmlFor: "example", children: "Example Label" }), _jsx(Input, { id: "example", placeholder: "Associated input" })] })),
};
export const RequiredWithInput = {
    render: () => (_jsxs("div", { className: "space-y-2 w-80", children: [_jsx(Label, { htmlFor: "required", required: true, children: "Required Field" }), _jsx(Input, { id: "required", placeholder: "This field is required" })] })),
};
export const AllVariants = {
    render: () => (_jsxs("div", { className: "space-y-6 w-80", children: [_jsxs("div", { children: [_jsx(Label, { children: "Optional Field" }), _jsx(Input, { placeholder: "This field is optional" })] }), _jsxs("div", { children: [_jsx(Label, { required: true, children: "Required Field" }), _jsx(Input, { placeholder: "This field is required" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "email", children: "Email Address" }), _jsx(Input, { id: "email", type: "email", placeholder: "Enter your email" })] })] })),
};
