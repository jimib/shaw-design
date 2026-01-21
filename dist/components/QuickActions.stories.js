import { QuickActions } from "./QuickActions";
import { Upload, FileText, Users } from "lucide-react";
const meta = {
    title: "Components/QuickActions",
    component: QuickActions,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
const sampleActions = [
    {
        label: "Upload Content",
        href: "#",
        icon: Upload,
    },
    {
        label: "New Article",
        href: "#",
        icon: FileText,
    },
    {
        label: "Manage Users",
        href: "#",
        icon: Users,
    },
];
export const Default = {
    args: {
        actions: sampleActions,
    },
};
export const WithTitle = {
    args: {
        actions: sampleActions,
        title: "Quick Actions",
    },
};
export const WithClick = {
    args: {
        actions: [
            {
                label: "Upload Content",
                onClick: () => alert("Upload clicked!"),
                icon: Upload,
            },
            {
                label: "New Article",
                onClick: () => alert("New article clicked!"),
                icon: FileText,
            },
            {
                label: "Manage Users",
                onClick: () => alert("Manage users clicked!"),
                icon: Users,
            },
        ],
    },
};
