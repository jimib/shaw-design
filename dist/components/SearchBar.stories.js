import { jsx as _jsx } from "react/jsx-runtime";
import { SearchBar } from "./SearchBar";
import { useState } from "react";
const meta = {
    title: "Components/SearchBar",
    component: SearchBar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => {
        const [value, setValue] = useState("");
        return (_jsx("div", { style: { width: "400px" }, children: _jsx(SearchBar, { value: value, onChange: setValue, placeholder: "Search..." }) }));
    },
};
export const WithValue = {
    render: () => {
        const [value, setValue] = useState("Southern Screen");
        return (_jsx("div", { style: { width: "400px" }, children: _jsx(SearchBar, { value: value, onChange: setValue, placeholder: "Search content..." }) }));
    },
};
export const CustomPlaceholder = {
    render: () => {
        const [value, setValue] = useState("");
        return (_jsx("div", { style: { width: "400px" }, children: _jsx(SearchBar, { value: value, onChange: setValue, placeholder: "Search titles, keywords, content..." }) }));
    },
};
