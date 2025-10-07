import React from "react";
export interface Toast {
    id: string;
    message: string;
    variant?: "success" | "error" | "warning" | "info";
    duration?: number;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    onClose?: () => void;
    action?: {
        label: string;
        onClick: () => void;
    };
    icon?: React.ReactNode;
}
interface ToastContextType {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, "id">) => string;
    removeToast: (id: string) => void;
    clearAllToasts: () => void;
}
export declare const ToastProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useToast: () => ToastContextType;
interface IndividualToastProps {
    message: string;
    variant?: Toast["variant"];
    duration?: number;
    position?: Toast["position"];
    onClose?: () => void;
    action?: Toast["action"];
    icon?: React.ReactNode;
    isVisible?: boolean;
}
export declare const Toast: React.FC<IndividualToastProps>;
export {};
