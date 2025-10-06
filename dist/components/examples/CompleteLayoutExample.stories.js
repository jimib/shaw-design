import { jsx as _jsx } from "react/jsx-runtime";
import { CompleteLayoutExample, AuthLayoutExample, } from "./CompleteLayoutExample";
const meta = {
    title: "Examples/Complete Layout",
    component: CompleteLayoutExample,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};
export default meta;
export const Dashboard = {
    render: () => _jsx(CompleteLayoutExample, {}),
};
export const Auth = {
    render: () => _jsx(AuthLayoutExample, {}),
};
