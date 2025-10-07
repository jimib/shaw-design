import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Progress } from "./Progress";
const meta = {
    title: "Components/Progress",
    component: Progress,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        value: {
            control: { type: "range", min: 0, max: 100, step: 1 },
        },
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg"],
        },
        variant: {
            control: { type: "select" },
            options: ["default", "success", "warning", "error"],
        },
        showPercentage: {
            control: { type: "boolean" },
        },
        showSpinner: {
            control: { type: "boolean" },
        },
    },
};
export default meta;
export const Default = {
    args: {
        value: 50,
        size: "md",
        variant: "default",
        showPercentage: true,
        showSpinner: false,
    },
};
export const Small = {
    args: {
        value: 75,
        size: "sm",
        variant: "default",
        showPercentage: true,
        showSpinner: false,
    },
};
export const Large = {
    args: {
        value: 25,
        size: "lg",
        variant: "default",
        showPercentage: true,
        showSpinner: false,
    },
};
export const WithLabel = {
    args: {
        value: 60,
        size: "md",
        variant: "default",
        showPercentage: true,
        showSpinner: false,
        label: "Upload Progress",
    },
};
export const AllVariants = {
    render: () => (_jsxs("div", { style: {
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "400px",
        }, children: [_jsx(Progress, { value: 75, size: "md", variant: "default", label: "Default Progress", showPercentage: true }), _jsx(Progress, { value: 90, size: "md", variant: "success", label: "Success Progress", showPercentage: true }), _jsx(Progress, { value: 45, size: "md", variant: "warning", label: "Warning Progress", showPercentage: true }), _jsx(Progress, { value: 20, size: "md", variant: "error", label: "Error Progress", showPercentage: true })] })),
};
export const AllSizes = {
    render: () => (_jsxs("div", { style: {
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "400px",
        }, children: [_jsx(Progress, { value: 50, size: "sm", variant: "default", label: "Small Progress", showPercentage: true }), _jsx(Progress, { value: 50, size: "md", variant: "default", label: "Medium Progress", showPercentage: true }), _jsx(Progress, { value: 50, size: "lg", variant: "default", label: "Large Progress", showPercentage: true })] })),
};
export const WithSpinner = {
    render: () => (_jsxs("div", { style: {
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "400px",
        }, children: [_jsx(Progress, { value: 0, size: "md", variant: "default", label: "Loading...", showSpinner: true, showPercentage: false }), _jsx(Progress, { value: 30, size: "md", variant: "success", label: "Processing...", showSpinner: true, showPercentage: true }), _jsx(Progress, { value: 60, size: "md", variant: "warning", label: "Almost done...", showSpinner: true, showPercentage: true })] })),
};
export const WithoutPercentage = {
    args: {
        value: 80,
        size: "md",
        variant: "default",
        showPercentage: false,
        showSpinner: false,
        label: "Progress without percentage",
    },
};
export const AnimatedProgress = {
    render: () => {
        const [progress, setProgress] = useState(0);
        useEffect(() => {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return prev + 1;
                });
            }, 50);
            return () => clearInterval(interval);
        }, []);
        return (_jsx("div", { style: { width: "400px" }, children: _jsx(Progress, { value: progress, size: "md", variant: progress === 100 ? "success" : "default", label: progress === 100 ? "Complete!" : "Uploading file...", showPercentage: true, showSpinner: progress < 100 }) }));
    },
};
export const FileUploadExample = {
    render: () => {
        const [uploadProgress, setUploadProgress] = useState(0);
        const [isUploading, setIsUploading] = useState(false);
        const startUpload = () => {
            setIsUploading(true);
            setUploadProgress(0);
            const interval = setInterval(() => {
                setUploadProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setIsUploading(false);
                        return 100;
                    }
                    return prev + Math.random() * 10;
                });
            }, 200);
        };
        return (_jsxs("div", { style: { width: "400px" }, children: [_jsx("h3", { children: "File Upload Example" }), _jsx(Progress, { value: uploadProgress, size: "md", variant: uploadProgress === 100 ? "success" : "default", label: uploadProgress === 100
                        ? "Upload Complete!"
                        : isUploading
                            ? "Uploading..."
                            : "Ready to upload", showPercentage: true, showSpinner: isUploading && uploadProgress < 100 }), _jsx("div", { style: { marginTop: "16px" }, children: _jsx("button", { onClick: startUpload, disabled: isUploading, style: {
                            padding: "8px 16px",
                            background: isUploading
                                ? "hsl(var(--muted))"
                                : "hsl(var(--primary))",
                            color: "hsl(var(--primary-foreground))",
                            border: "none",
                            borderRadius: "6px",
                            cursor: isUploading ? "not-allowed" : "pointer",
                        }, children: isUploading ? "Uploading..." : "Start Upload" }) })] }));
    },
};
export const CustomMaxValue = {
    render: () => (_jsxs("div", { style: {
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "400px",
        }, children: [_jsx(Progress, { value: 25, max: 50, size: "md", variant: "default", label: "Progress with custom max (25/50)", showPercentage: true }), _jsx(Progress, { value: 150, max: 200, size: "md", variant: "success", label: "Progress with custom max (150/200)", showPercentage: true })] })),
};
