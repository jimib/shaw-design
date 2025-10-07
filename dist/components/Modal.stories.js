import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, } from "./Modal";
import { Button } from "./Button";
// import { Card, CardHeader, CardTitle, CardContent } from "./Card";
const meta = {
    title: "Components/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg", "xl", "full"],
        },
        animation: {
            control: { type: "select" },
            options: ["fade", "slide", "none"],
        },
        showCloseButton: {
            control: { type: "boolean" },
        },
        closeOnOverlayClick: {
            control: { type: "boolean" },
        },
        closeOnEscape: {
            control: { type: "boolean" },
        },
    },
};
export default meta;
// Helper component for stories
const ModalExample = ({ size = "md", animation = "fade", showCloseButton = true, closeOnOverlayClick = true, closeOnEscape = true, }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => setIsOpen(true), children: "Open Modal" }), _jsxs(Modal, { isOpen: isOpen, onClose: () => setIsOpen(false), size: size, animation: animation, showCloseButton: showCloseButton, closeOnOverlayClick: closeOnOverlayClick, closeOnEscape: closeOnEscape, children: [_jsxs(ModalHeader, { children: [_jsx(ModalTitle, { children: "Modal Example" }), " "] }), _jsxs(ModalBody, { children: [_jsx("p", { children: "This is a modal dialog example." }), _jsx("p", { children: "You can close it by:" }), _jsxs("ul", { children: [_jsx("li", { children: "Clicking the X button (if enabled)" }), _jsx("li", { children: "Clicking outside the modal (if enabled)" }), _jsx("li", { children: "Pressing the Escape key (if enabled)" })] })] }), _jsx(ModalFooter, { children: _jsx(Button, { onClick: () => setIsOpen(false), children: "Close Modal" }) })] })] }));
};
export const Default = {
    render: () => _jsx(ModalExample, {}),
};
export const Small = {
    render: () => _jsx(ModalExample, { size: "sm" }),
};
export const Large = {
    render: () => _jsx(ModalExample, { size: "lg" }),
};
export const ExtraLarge = {
    render: () => _jsx(ModalExample, { size: "xl" }),
};
export const FullScreen = {
    render: () => _jsx(ModalExample, { size: "full" }),
};
export const SlideAnimation = {
    render: () => _jsx(ModalExample, { animation: "slide" }),
};
export const NoAnimation = {
    render: () => _jsx(ModalExample, { animation: "none" }),
};
export const NoCloseButton = {
    render: () => _jsx(ModalExample, { showCloseButton: false }),
};
export const NoOverlayClose = {
    render: () => _jsx(ModalExample, { closeOnOverlayClick: false }),
};
export const NoEscapeClose = {
    render: () => _jsx(ModalExample, { closeOnEscape: false }),
};
export const FormExample = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [formData, setFormData] = useState({ name: "", email: "" });
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => setIsOpen(true), children: "Open Form Modal" }), _jsxs(Modal, { isOpen: isOpen, onClose: () => setIsOpen(false), size: "md", children: [_jsx(ModalHeader, { children: _jsx(ModalTitle, { children: "Contact Form" }) }), _jsxs(ModalBody, { children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", style: { display: "block", marginBottom: "4px" }, children: "Name" }), _jsx("input", { id: "name", type: "text", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), style: {
                                                width: "100%",
                                                padding: "8px 12px",
                                                border: "1px solid hsl(var(--border))",
                                                borderRadius: "6px",
                                                background: "hsl(var(--input))",
                                            } })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", style: { display: "block", marginBottom: "4px" }, children: "Email" }), _jsx("input", { id: "email", type: "email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), style: {
                                                width: "100%",
                                                padding: "8px 12px",
                                                border: "1px solid hsl(var(--border))",
                                                borderRadius: "6px",
                                                background: "hsl(var(--input))",
                                            } })] }), _jsxs("div", { style: {
                                        display: "flex",
                                        gap: "8px",
                                        justifyContent: "flex-end",
                                    }, children: [_jsx(Button, { variant: "outline", onClick: () => setIsOpen(false), children: "Cancel" }), _jsx(Button, { onClick: () => setIsOpen(false), children: "Submit" })] })] })] })] }));
    },
};
export const AllSizes = {
    render: () => {
        const [openSize, setOpenSize] = useState(null);
        return (_jsxs("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: [["sm", "md", "lg", "xl", "full"].map((size) => (_jsxs(Button, { onClick: () => setOpenSize(size), children: [size.toUpperCase(), " Modal"] }, size))), openSize && (_jsxs(Modal, { isOpen: true, onClose: () => setOpenSize(null), size: openSize, children: [_jsx(ModalHeader, { children: _jsxs(ModalTitle, { children: [openSize.toUpperCase(), " Modal"] }) }), _jsx(ModalBody, { children: _jsxs("p", { children: ["This is a ", openSize, " sized modal."] }) }), _jsx(ModalFooter, { children: _jsx(Button, { onClick: () => setOpenSize(null), children: "Close" }) })] }))] }));
    },
};
export const NewDesignShowcase = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => setIsOpen(true), children: "Show New Design Modal" }), _jsxs(Modal, { isOpen: isOpen, onClose: () => setIsOpen(false), size: "lg", animation: "fade", children: [_jsx("h2", { style: {
                                margin: "0 0 16px 0",
                                fontSize: "24px",
                                fontWeight: "600",
                                color: "hsl(var(--card-foreground))",
                            }, children: "New Modal Design" }), _jsx("p", { style: {
                                margin: "0 0 20px 0",
                                color: "hsl(var(--card-foreground))",
                                opacity: 0.8,
                            }, children: "This modal features the new design with:" }), _jsxs("ul", { style: {
                                margin: "0 0 20px 0",
                                paddingLeft: "20px",
                                color: "hsl(var(--card-foreground))",
                            }, children: [_jsx("li", { children: "Pink border with 30% opacity" }), _jsx("li", { children: "Gradient card background with 90% opacity" }), _jsx("li", { children: "Backdrop blur effect" }), _jsx("li", { children: "Enhanced shadow styling" })] }), _jsxs("div", { style: { display: "flex", gap: "8px" }, children: [_jsx(Button, { onClick: () => setIsOpen(false), children: "Close Modal" }), _jsx(Button, { variant: "outline", onClick: () => setIsOpen(false), children: "Cancel" })] })] })] }));
    },
};
