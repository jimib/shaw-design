import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Textarea } from "./Textarea";
import { Checkbox } from "./Checkbox";
import { Radio } from "./Radio";
import { Select } from "./Select";
import { Label } from "./Label";
const meta = {
    title: "Components/Form Components",
    component: Textarea,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
// Textarea Stories
export const TextareaDefault = {
    render: () => (_jsxs("div", { style: { width: "400px" }, children: [_jsx(Label, { htmlFor: "textarea-default", children: "Message" }), _jsx(Textarea, { id: "textarea-default", placeholder: "Enter your message here...", rows: 4 })] })),
};
export const TextareaTransparent = {
    render: () => (_jsxs("div", { style: { width: "400px" }, children: [_jsx(Label, { htmlFor: "textarea-transparent", children: "Transparent Textarea" }), _jsx(Textarea, { id: "textarea-transparent", variant: "transparent", placeholder: "Transparent variant...", rows: 3 })] })),
};
export const TextareaStates = {
    render: () => (_jsxs("div", { style: {
            width: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
        }, children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "textarea-error", children: "Error State" }), _jsx(Textarea, { id: "textarea-error", error: true, placeholder: "This has an error...", defaultValue: "Invalid input" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "textarea-success", children: "Success State" }), _jsx(Textarea, { id: "textarea-success", success: true, placeholder: "This is successful...", defaultValue: "Valid input" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "textarea-warning", children: "Warning State" }), _jsx(Textarea, { id: "textarea-warning", warning: true, placeholder: "This has a warning...", defaultValue: "Warning input" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "textarea-disabled", children: "Disabled State" }), _jsx(Textarea, { id: "textarea-disabled", disabled: true, placeholder: "This is disabled...", defaultValue: "Disabled input" })] })] })),
};
// Checkbox Stories
export const CheckboxDefault = {
    render: () => (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [_jsx(Checkbox, { label: "Accept terms and conditions" }), _jsx(Checkbox, { label: "Subscribe to newsletter" }), _jsx(Checkbox, { label: "Enable notifications" })] })),
};
export const CheckboxStates = {
    render: () => (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [_jsx(Checkbox, { label: "Default checked", checked: true }), _jsx(Checkbox, { label: "Error state", error: true, checked: true }), _jsx(Checkbox, { label: "Success state", success: true, checked: true }), _jsx(Checkbox, { label: "Warning state", warning: true, checked: true }), _jsx(Checkbox, { label: "Disabled", disabled: true }), _jsx(Checkbox, { label: "Disabled checked", disabled: true, checked: true })] })),
};
export const CheckboxInteractive = {
    render: () => {
        const [checked, setChecked] = useState(false);
        return (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [_jsx(Checkbox, { label: "Interactive checkbox", checked: checked, onChange: (e) => setChecked(e.target.checked) }), _jsxs("p", { children: ["Checked: ", checked ? "Yes" : "No"] })] }));
    },
};
// Radio Stories
export const RadioDefault = {
    render: () => (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [_jsx(Radio, { name: "option", label: "Option 1" }), _jsx(Radio, { name: "option", label: "Option 2" }), _jsx(Radio, { name: "option", label: "Option 3" })] })),
};
export const RadioStates = {
    render: () => (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [_jsx(Radio, { name: "state", label: "Default checked", checked: true }), _jsx(Radio, { name: "error", label: "Error state", error: true, checked: true }), _jsx(Radio, { name: "success", label: "Success state", success: true, checked: true }), _jsx(Radio, { name: "warning", label: "Warning state", warning: true, checked: true }), _jsx(Radio, { name: "disabled", label: "Disabled", disabled: true }), _jsx(Radio, { name: "disabled-checked", label: "Disabled checked", disabled: true, checked: true })] })),
};
export const RadioInteractive = {
    render: () => {
        const [selected, setSelected] = useState("option1");
        return (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [_jsx(Radio, { name: "interactive", label: "Option 1", value: "option1", checked: selected === "option1", onChange: (e) => setSelected(e.target.value) }), _jsx(Radio, { name: "interactive", label: "Option 2", value: "option2", checked: selected === "option2", onChange: (e) => setSelected(e.target.value) }), _jsx(Radio, { name: "interactive", label: "Option 3", value: "option3", checked: selected === "option3", onChange: (e) => setSelected(e.target.value) }), _jsxs("p", { children: ["Selected: ", selected] })] }));
    },
};
// Select Stories
export const SelectDefault = {
    render: () => (_jsxs("div", { style: { width: "300px" }, children: [_jsx(Label, { htmlFor: "select-default", children: "Choose an option" }), _jsx(Select, { id: "select-default", placeholder: "Select an option...", options: [
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                    { value: "option4", label: "Option 4" },
                ] })] })),
};
export const SelectStates = {
    render: () => (_jsxs("div", { style: {
            width: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
        }, children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "select-error", children: "Error State" }), _jsx(Select, { id: "select-error", error: true, options: [
                            { value: "option1", label: "Option 1" },
                            { value: "option2", label: "Option 2" },
                        ] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "select-success", children: "Success State" }), _jsx(Select, { id: "select-success", success: true, options: [
                            { value: "option1", label: "Option 1" },
                            { value: "option2", label: "Option 2" },
                        ] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "select-warning", children: "Warning State" }), _jsx(Select, { id: "select-warning", warning: true, options: [
                            { value: "option1", label: "Option 1" },
                            { value: "option2", label: "Option 2" },
                        ] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "select-disabled", children: "Disabled State" }), _jsx(Select, { id: "select-disabled", disabled: true, options: [
                            { value: "option1", label: "Option 1" },
                            { value: "option2", label: "Option 2" },
                        ] })] })] })),
};
export const SelectWithDisabledOptions = {
    render: () => (_jsxs("div", { style: { width: "300px" }, children: [_jsx(Label, { htmlFor: "select-disabled-options", children: "Select with disabled options" }), _jsx(Select, { id: "select-disabled-options", placeholder: "Choose an option...", options: [
                    { value: "option1", label: "Available Option 1" },
                    { value: "option2", label: "Available Option 2" },
                    { value: "option3", label: "Disabled Option 1", disabled: true },
                    { value: "option4", label: "Available Option 3" },
                    { value: "option5", label: "Disabled Option 2", disabled: true },
                ] })] })),
};
export const SelectInteractive = {
    render: () => {
        const [selected, setSelected] = useState("");
        return (_jsxs("div", { style: { width: "300px" }, children: [_jsx(Label, { htmlFor: "select-interactive", children: "Interactive Select" }), _jsx(Select, { id: "select-interactive", placeholder: "Choose an option...", value: selected, onChange: (e) => setSelected(e.target.value), options: [
                        { value: "option1", label: "Option 1" },
                        { value: "option2", label: "Option 2" },
                        { value: "option3", label: "Option 3" },
                    ] }), _jsxs("p", { style: {
                        marginTop: "8px",
                        fontSize: "14px",
                        color: "hsl(var(--muted-foreground))",
                    }, children: ["Selected: ", selected || "None"] })] }));
    },
};
// Combined Form Example
export const FormExample = {
    render: () => {
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: "",
            newsletter: false,
            notifications: "email",
            country: "",
        });
        return (_jsxs("div", { style: {
                width: "400px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
            }, children: [_jsx("h3", { children: "Contact Form" }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "name", required: true, children: "Name" }), _jsx("input", { id: "name", type: "text", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), style: {
                                width: "100%",
                                padding: "8px 12px",
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "6px",
                                background: "hsl(var(--input))",
                            } })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "email", required: true, children: "Email" }), _jsx("input", { id: "email", type: "email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), style: {
                                width: "100%",
                                padding: "8px 12px",
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "6px",
                                background: "hsl(var(--input))",
                            } })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "country", children: "Country" }), _jsx(Select, { id: "country", placeholder: "Select your country...", value: formData.country, onChange: (e) => setFormData({ ...formData, country: e.target.value }), options: [
                                { value: "us", label: "United States" },
                                { value: "uk", label: "United Kingdom" },
                                { value: "ca", label: "Canada" },
                                { value: "au", label: "Australia" },
                            ] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "message", children: "Message" }), _jsx(Textarea, { id: "message", placeholder: "Enter your message...", value: formData.message, onChange: (e) => setFormData({ ...formData, message: e.target.value }), rows: 4 })] }), _jsx("div", { children: _jsx(Checkbox, { label: "Subscribe to newsletter", checked: formData.newsletter, onChange: (e) => setFormData({ ...formData, newsletter: e.target.checked }) }) }), _jsxs("div", { children: [_jsx(Label, { children: "Notification Preferences" }), _jsxs("div", { style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                                marginTop: "8px",
                            }, children: [_jsx(Radio, { name: "notifications", label: "Email notifications", value: "email", checked: formData.notifications === "email", onChange: (e) => setFormData({ ...formData, notifications: e.target.value }) }), _jsx(Radio, { name: "notifications", label: "SMS notifications", value: "sms", checked: formData.notifications === "sms", onChange: (e) => setFormData({ ...formData, notifications: e.target.value }) }), _jsx(Radio, { name: "notifications", label: "No notifications", value: "none", checked: formData.notifications === "none", onChange: (e) => setFormData({ ...formData, notifications: e.target.value }) })] })] }), _jsxs("div", { style: {
                        marginTop: "16px",
                        padding: "12px",
                        background: "hsl(var(--muted))",
                        borderRadius: "6px",
                    }, children: [_jsx("h4", { children: "Form Data:" }), _jsx("pre", { style: { fontSize: "12px", margin: 0 }, children: JSON.stringify(formData, null, 2) })] })] }));
    },
};
