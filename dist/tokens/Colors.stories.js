import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { colors } from "./colors";
const meta = {
    title: "Tokens/Colors",
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};
export default meta;
export const Palette = {
    render: () => (_jsxs("div", { className: "space-y-8", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Primary Colors" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: Object.entries(colors)
                            .filter(([key]) => key.startsWith("primary"))
                            .map(([key, value]) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-20 h-20 rounded-lg mx-auto mb-2 border border-gray-200", style: { backgroundColor: value } }), _jsx("code", { className: "text-xs font-mono", children: key }), _jsx("p", { className: "text-xs text-gray-600 mt-1", children: value })] }, key))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Secondary Colors" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: Object.entries(colors)
                            .filter(([key]) => key.startsWith("secondary"))
                            .map(([key, value]) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-20 h-20 rounded-lg mx-auto mb-2 border border-gray-200", style: { backgroundColor: value } }), _jsx("code", { className: "text-xs font-mono", children: key }), _jsx("p", { className: "text-xs text-gray-600 mt-1", children: value })] }, key))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Accent Colors" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: Object.entries(colors)
                            .filter(([key]) => key.startsWith("accent"))
                            .map(([key, value]) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-20 h-20 rounded-lg mx-auto mb-2 border border-gray-200", style: { backgroundColor: value } }), _jsx("code", { className: "text-xs font-mono", children: key }), _jsx("p", { className: "text-xs text-gray-600 mt-1", children: value })] }, key))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Gray Scale" }), _jsx("div", { className: "grid grid-cols-5 md:grid-cols-10 gap-2", children: Object.entries(colors.gray).map(([key, value]) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 rounded-lg mx-auto mb-2 border border-gray-200", style: { backgroundColor: value } }), _jsx("code", { className: "text-xs font-mono", children: key }), _jsx("p", { className: "text-xs text-gray-600 mt-1", children: value })] }, key))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Semantic Colors" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: Object.entries(colors)
                            .filter(([key]) => ["success", "warning", "error", "info"].includes(key))
                            .map(([key, value]) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-20 h-20 rounded-lg mx-auto mb-2 border border-gray-200", style: { backgroundColor: value } }), _jsx("code", { className: "text-xs font-mono", children: key }), _jsx("p", { className: "text-xs text-gray-600 mt-1", children: value })] }, key))) })] })] })),
};
