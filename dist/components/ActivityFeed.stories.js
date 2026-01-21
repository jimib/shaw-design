import { ActivityFeed } from "./ActivityFeed";
import { Upload, Edit3, Globe, Eye } from "lucide-react";
const meta = {
    title: "Components/ActivityFeed",
    component: ActivityFeed,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
const sampleActivities = [
    {
        id: 1,
        action: "uploaded",
        item: "Southern Screen 南國電影 No. 148",
        user: "James",
        time: "2 hours ago",
        icon: Upload,
        iconColor: "hsl(var(--primary))",
        parentCategory: "archive",
    },
    {
        id: 2,
        action: "edited",
        item: "邵逸夫和他的黃金時代",
        user: "Alastair",
        time: "4 hours ago",
        icon: Edit3,
        iconColor: "hsl(38 92% 50%)",
        parentCategory: "curate",
    },
    {
        id: 3,
        action: "published",
        item: "Southern Screen 南國電影 No. 147",
        user: "Wendy",
        time: "Yesterday",
        icon: Globe,
        iconColor: "hsl(142 76% 36%)",
        parentCategory: "exhibition",
    },
    {
        id: 4,
        action: "viewed",
        item: "邵氏電影王國秘辛",
        user: "Ho Puay Peng",
        time: "Yesterday",
        icon: Eye,
        iconColor: "hsl(var(--muted-foreground))",
        parentCategory: "archive",
    },
];
export const Default = {
    args: {
        activities: sampleActivities,
    },
};
export const WithTitle = {
    args: {
        activities: sampleActivities,
        title: "Recent Activity",
    },
};
export const WithViewAll = {
    args: {
        activities: sampleActivities,
        title: "Recent Activity",
        viewAllHref: "#",
    },
};
export const WithClick = {
    args: {
        activities: sampleActivities,
        title: "Recent Activity",
        onItemClick: (activity) => alert(`Clicked: ${activity.item}`),
    },
};
