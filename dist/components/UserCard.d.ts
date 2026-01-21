import React from "react";
export interface User {
    name: string;
    email: string;
    joined?: string;
    role?: string;
    avatar?: string;
}
interface UserCardProps {
    user: User;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
}
export declare const UserCard: React.FC<UserCardProps>;
export {};
