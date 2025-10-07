import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ToastProvider, useToast } from "./Toast";
import { Button } from "./Button";
const meta = {
    title: "Components/Toast",
    component: ToastProvider,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};
export default meta;
// Helper component for stories
const ToastDemo = () => {
    const { addToast, clearAllToasts } = useToast();
    const showSuccessToast = () => {
        addToast({
            message: "Operation completed successfully!",
            variant: "success",
            duration: 3000,
        });
    };
    const showErrorToast = () => {
        addToast({
            message: "Something went wrong. Please try again.",
            variant: "error",
            duration: 5000,
        });
    };
    const showWarningToast = () => {
        addToast({
            message: "Please review your input before proceeding.",
            variant: "warning",
            duration: 4000,
        });
    };
    const showInfoToast = () => {
        addToast({
            message: "Here's some helpful information for you.",
            variant: "info",
            duration: 3000,
        });
    };
    const showToastWithAction = () => {
        addToast({
            message: "File uploaded successfully!",
            variant: "success",
            duration: 0, // Don't auto-dismiss
            action: {
                label: "View",
                onClick: () => {
                    console.log("View file clicked");
                },
            },
        });
    };
    const showToastWithIcon = () => {
        addToast({
            message: "New message received",
            variant: "info",
            duration: 3000,
            icon: "📧",
        });
    };
    const showMultipleToasts = () => {
        addToast({
            message: "First toast",
            variant: "info",
            position: "top-right",
        });
        addToast({
            message: "Second toast",
            variant: "success",
            position: "top-right",
        });
        addToast({
            message: "Third toast",
            variant: "warning",
            position: "top-right",
        });
    };
    return (_jsxs("div", { style: {
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
        }, children: [_jsx("h2", { children: "Toast Examples" }), _jsxs("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: [_jsx(Button, { onClick: showSuccessToast, variant: "primary", children: "Success Toast" }), _jsx(Button, { onClick: showErrorToast, variant: "primary", children: "Error Toast" }), _jsx(Button, { onClick: showWarningToast, variant: "primary", children: "Warning Toast" }), _jsx(Button, { onClick: showInfoToast, variant: "primary", children: "Info Toast" })] }), _jsxs("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: [_jsx(Button, { onClick: showToastWithAction, variant: "secondary", children: "Toast with Action" }), _jsx(Button, { onClick: showToastWithIcon, variant: "secondary", children: "Toast with Icon" }), _jsx(Button, { onClick: showMultipleToasts, variant: "secondary", children: "Multiple Toasts" }), _jsx(Button, { onClick: clearAllToasts, variant: "outline", children: "Clear All" })] })] }));
};
export const Default = {
    render: () => (_jsx(ToastProvider, { children: _jsx(ToastDemo, {}) })),
};
export const AllVariants = {
    render: () => {
        const AllVariantsDemo = () => {
            const { addToast } = useToast();
            const showAllVariants = () => {
                addToast({
                    message: "Success message",
                    variant: "success",
                    position: "top-right",
                });
                addToast({
                    message: "Error message",
                    variant: "error",
                    position: "top-right",
                });
                addToast({
                    message: "Warning message",
                    variant: "warning",
                    position: "top-right",
                });
                addToast({
                    message: "Info message",
                    variant: "info",
                    position: "top-right",
                });
            };
            return (_jsxs("div", { style: { padding: "20px" }, children: [_jsx("h2", { children: "All Toast Variants" }), _jsx(Button, { onClick: showAllVariants, children: "Show All Variants" })] }));
        };
        return (_jsx(ToastProvider, { children: _jsx(AllVariantsDemo, {}) }));
    },
};
export const AllPositions = {
    render: () => {
        const AllPositionsDemo = () => {
            const { addToast } = useToast();
            const showTopRight = () => {
                addToast({
                    message: "Top Right Toast",
                    variant: "info",
                    position: "top-right",
                });
            };
            const showTopLeft = () => {
                addToast({
                    message: "Top Left Toast",
                    variant: "success",
                    position: "top-left",
                });
            };
            const showBottomRight = () => {
                addToast({
                    message: "Bottom Right Toast",
                    variant: "warning",
                    position: "bottom-right",
                });
            };
            const showBottomLeft = () => {
                addToast({
                    message: "Bottom Left Toast",
                    variant: "error",
                    position: "bottom-left",
                });
            };
            return (_jsxs("div", { style: {
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                }, children: [_jsx("h2", { children: "Toast Positions" }), _jsxs("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: [_jsx(Button, { onClick: showTopRight, children: "Top Right" }), _jsx(Button, { onClick: showTopLeft, children: "Top Left" }), _jsx(Button, { onClick: showBottomRight, children: "Bottom Right" }), _jsx(Button, { onClick: showBottomLeft, children: "Bottom Left" })] })] }));
        };
        return (_jsx(ToastProvider, { children: _jsx(AllPositionsDemo, {}) }));
    },
};
export const WithActions = {
    render: () => {
        const WithActionsDemo = () => {
            const { addToast } = useToast();
            const showUndoToast = () => {
                addToast({
                    message: "Item deleted",
                    variant: "info",
                    duration: 0,
                    action: {
                        label: "Undo",
                        onClick: () => {
                            console.log("Undo clicked");
                        },
                    },
                });
            };
            const showDownloadToast = () => {
                addToast({
                    message: "File ready for download",
                    variant: "success",
                    duration: 0,
                    action: {
                        label: "Download",
                        onClick: () => {
                            console.log("Download clicked");
                        },
                    },
                });
            };
            return (_jsxs("div", { style: {
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                }, children: [_jsx("h2", { children: "Toasts with Actions" }), _jsxs("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: [_jsx(Button, { onClick: showUndoToast, children: "Undo Action" }), _jsx(Button, { onClick: showDownloadToast, children: "Download Action" })] })] }));
        };
        return (_jsx(ToastProvider, { children: _jsx(WithActionsDemo, {}) }));
    },
};
export const CustomDuration = {
    render: () => {
        const CustomDurationDemo = () => {
            const { addToast } = useToast();
            const showQuickToast = () => {
                addToast({
                    message: "Quick message (1 second)",
                    variant: "info",
                    duration: 1000,
                });
            };
            const showLongToast = () => {
                addToast({
                    message: "Long message (10 seconds)",
                    variant: "warning",
                    duration: 10000,
                });
            };
            const showPersistentToast = () => {
                addToast({
                    message: "Persistent message (no auto-dismiss)",
                    variant: "error",
                    duration: 0,
                });
            };
            return (_jsxs("div", { style: {
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                }, children: [_jsx("h2", { children: "Custom Duration Toasts" }), _jsxs("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: [_jsx(Button, { onClick: showQuickToast, children: "Quick Toast (1s)" }), _jsx(Button, { onClick: showLongToast, children: "Long Toast (10s)" }), _jsx(Button, { onClick: showPersistentToast, children: "Persistent Toast" })] })] }));
        };
        return (_jsx(ToastProvider, { children: _jsx(CustomDurationDemo, {}) }));
    },
};
export const StackingExample = {
    render: () => {
        const StackingDemo = () => {
            const { addToast } = useToast();
            const showStackedToasts = () => {
                // Show multiple toasts in the same position to demonstrate stacking
                for (let i = 1; i <= 5; i++) {
                    setTimeout(() => {
                        addToast({
                            message: `Toast ${i} - This demonstrates stacking behavior`,
                            variant: i % 2 === 0 ? "success" : "info",
                            position: "top-right",
                        });
                    }, i * 500);
                }
            };
            return (_jsxs("div", { style: {
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                }, children: [_jsx("h2", { children: "Toast Stacking" }), _jsx("p", { children: "Click the button to see how multiple toasts stack in the same position." }), _jsx(Button, { onClick: showStackedToasts, children: "Show Stacked Toasts" })] }));
        };
        return (_jsx(ToastProvider, { children: _jsx(StackingDemo, {}) }));
    },
};
