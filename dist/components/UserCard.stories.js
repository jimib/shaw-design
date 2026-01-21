import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { UserCard } from "./UserCard";
const meta = {
    title: "Components/UserCard",
    component: UserCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        user: {
            name: "Dora",
            email: "doratoihu@gmail.com",
            joined: "03/12/2025",
            role: "User",
        },
    },
};
export const WithClick = {
    args: {
        user: {
            name: "James Liu",
            email: "james@example.com",
            joined: "01/01/2024",
            role: "Admin",
        },
        onClick: () => alert("User clicked!"),
    },
};
export const NoRole = {
    args: {
        user: {
            name: "John Doe",
            email: "john@example.com",
            joined: "15/06/2024",
        },
    },
};
export const List = {
    render: () => (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px", width: "400px" }, children: [_jsx(UserCard, { user: {
                    name: "Dora",
                    email: "doratoihu@gmail.com",
                    joined: "03/12/2025",
                    role: "User",
                } }), _jsx(UserCard, { user: {
                    name: "wenkaihu",
                    email: "wenkaihu@revival-heritage.com",
                    joined: "29/10/2025",
                    role: "User",
                } }), _jsx(UserCard, { user: {
                    name: "HWK0808",
                    email: "hwk0808@outlook.com",
                    joined: "23/10/2025",
                    role: "User",
                } })] })),
};
