import { jsx as _jsx } from "react/jsx-runtime";
import { TypeFilter } from "./TypeFilter";
import { useState } from "react";
const meta = {
    title: "Components/TypeFilter",
    component: TypeFilter,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => {
        const [value, setValue] = useState("All Types");
        return _jsx(TypeFilter, { value: value, onChange: setValue });
    },
};
export const WithSelection = {
    render: () => {
        const [value, setValue] = useState("Book");
        return _jsx(TypeFilter, { value: value, onChange: setValue });
    },
};
