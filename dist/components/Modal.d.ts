import React from "react";
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    size?: "sm" | "md" | "lg" | "xl" | "full";
    showCloseButton?: boolean;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    animation?: "fade" | "slide" | "none";
    zIndex?: number;
    children: React.ReactNode;
    className?: string;
}
export declare const Modal: React.FC<ModalProps>;
export declare const ModalHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ModalTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>> & string;
export declare const ModalBody: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ModalFooter: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
