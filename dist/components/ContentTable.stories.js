import { jsx as _jsx } from "react/jsx-runtime";
import { ContentTable } from "./ContentTable";
const meta = {
    title: "Components/ContentTable",
    component: ContentTable,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
const sampleContent = [
    {
        id: "1",
        title: "Southern Screen 南國電影 No. 148",
        type: "Magazine",
        mediaType: "PDF",
        issue: "No. 148",
        date: "June 1970",
        origin: "University of Hong Kong Libraries",
    },
    {
        id: "2",
        title: "Southern Screen 南國電影 No. 147",
        type: "Magazine",
        mediaType: "PDF",
        issue: "No. 147",
        date: "May 1970",
        origin: "University of Hong Kong Libraries",
    },
    {
        id: "3",
        title: "邵逸夫和他的黃金時代",
        type: "Book",
        mediaType: "PDF",
        date: "2014",
        origin: "University of Hong Kong Libraries",
    },
    {
        id: "4",
        title: "The Shaw Prize 邵逸夫獎",
        type: "Archival Document",
        mediaType: "PDF",
        date: "2002",
        origin: "University of Hong Kong Libraries",
    },
];
export const Default = {
    args: {
        data: sampleContent,
    },
    render: (args) => (_jsx("div", { style: { width: "1200px" }, children: _jsx(ContentTable, { ...args }) })),
};
export const WithSearch = {
    args: {
        data: sampleContent,
        search: "Southern",
    },
    render: (args) => (_jsx("div", { style: { width: "1200px" }, children: _jsx(ContentTable, { ...args }) })),
};
export const WithFilter = {
    args: {
        data: sampleContent,
        typeFilter: "Book",
    },
    render: (args) => (_jsx("div", { style: { width: "1200px" }, children: _jsx(ContentTable, { ...args }) })),
};
export const WithClick = {
    args: {
        data: sampleContent,
        onRowClick: (item) => alert(`Clicked: ${item.title}`),
    },
    render: (args) => (_jsx("div", { style: { width: "1200px" }, children: _jsx(ContentTable, { ...args }) })),
};
export const Empty = {
    args: {
        data: [],
        search: "nonexistent",
    },
    render: (args) => (_jsx("div", { style: { width: "1200px" }, children: _jsx(ContentTable, { ...args }) })),
};
