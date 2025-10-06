import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, } from "./Card";
const meta = {
    title: "Components/Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "gradient", "vintage"],
        },
    },
};
export default meta;
export const Default = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Default Card" }), _jsx(CardDescription, { children: "This is a default card with basic styling." })] }), _jsx(CardContent, { children: _jsx("p", { children: "Card content goes here. This is where you would put the main content of your card." }) })] })),
        variant: "default",
    },
};
export const Gradient = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Gradient Card" }), _jsx(CardDescription, { children: "This card uses the Shaw Heritage gradient background." })] }), _jsx(CardContent, { children: _jsx("p", { children: "This card features a beautiful gradient background that matches the Shaw Heritage design system." }) })] })),
        variant: "gradient",
    },
};
export const Vintage = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Vintage Card" }), _jsx(CardDescription, { children: "This card uses the vintage gradient with elegant shadows." })] }), _jsx(CardContent, { children: _jsx("p", { children: "This card features the vintage gradient background with enhanced shadow effects for a more premium look." }) })] })),
        variant: "vintage",
    },
};
export const AllVariants = {
    render: () => (_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl", children: [_jsxs(Card, { variant: "default", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Default" }), _jsx(CardDescription, { children: "Basic card styling" })] }), _jsx(CardContent, { children: _jsx("p", { children: "Standard card with clean design." }) })] }), _jsxs(Card, { variant: "gradient", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Gradient" }), _jsx(CardDescription, { children: "Shaw Heritage gradient" })] }), _jsx(CardContent, { children: _jsx("p", { children: "Card with gradient background." }) })] }), _jsxs(Card, { variant: "vintage", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Vintage" }), _jsx(CardDescription, { children: "Premium vintage styling" })] }), _jsx(CardContent, { children: _jsx("p", { children: "Card with vintage gradient and shadows." }) })] })] })),
};
