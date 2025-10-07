import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Textarea } from "./Textarea";
import { Checkbox } from "./Checkbox";
import { Radio } from "./Radio";
import { Select } from "./Select";
import { Label } from "./Label";

const meta: Meta<typeof Textarea> = {
  title: "Components/Form Components",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Textarea Stories
export const TextareaDefault: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Label htmlFor="textarea-default">Message</Label>
      <Textarea
        id="textarea-default"
        placeholder="Enter your message here..."
        rows={4}
      />
    </div>
  ),
};

export const TextareaTransparent: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Label htmlFor="textarea-transparent">Transparent Textarea</Label>
      <Textarea
        id="textarea-transparent"
        variant="transparent"
        placeholder="Transparent variant..."
        rows={3}
      />
    </div>
  ),
};

export const TextareaStates: Story = {
  render: () => (
    <div
      style={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div>
        <Label htmlFor="textarea-error">Error State</Label>
        <Textarea
          id="textarea-error"
          error
          placeholder="This has an error..."
          defaultValue="Invalid input"
        />
      </div>
      <div>
        <Label htmlFor="textarea-success">Success State</Label>
        <Textarea
          id="textarea-success"
          success
          placeholder="This is successful..."
          defaultValue="Valid input"
        />
      </div>
      <div>
        <Label htmlFor="textarea-warning">Warning State</Label>
        <Textarea
          id="textarea-warning"
          warning
          placeholder="This has a warning..."
          defaultValue="Warning input"
        />
      </div>
      <div>
        <Label htmlFor="textarea-disabled">Disabled State</Label>
        <Textarea
          id="textarea-disabled"
          disabled
          placeholder="This is disabled..."
          defaultValue="Disabled input"
        />
      </div>
    </div>
  ),
};

// Checkbox Stories
export const CheckboxDefault: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Checkbox label="Accept terms and conditions" />
      <Checkbox label="Subscribe to newsletter" />
      <Checkbox label="Enable notifications" />
    </div>
  ),
};

export const CheckboxStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Checkbox label="Default checked" checked />
      <Checkbox label="Error state" error checked />
      <Checkbox label="Success state" success checked />
      <Checkbox label="Warning state" warning checked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled checked />
    </div>
  ),
};

export const CheckboxInteractive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Checkbox
          label="Interactive checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p>Checked: {checked ? "Yes" : "No"}</p>
      </div>
    );
  },
};

// Radio Stories
export const RadioDefault: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Radio name="option" label="Option 1" />
      <Radio name="option" label="Option 2" />
      <Radio name="option" label="Option 3" />
    </div>
  ),
};

export const RadioStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Radio name="state" label="Default checked" checked />
      <Radio name="error" label="Error state" error checked />
      <Radio name="success" label="Success state" success checked />
      <Radio name="warning" label="Warning state" warning checked />
      <Radio name="disabled" label="Disabled" disabled />
      <Radio
        name="disabled-checked"
        label="Disabled checked"
        disabled
        checked
      />
    </div>
  ),
};

export const RadioInteractive: Story = {
  render: () => {
    const [selected, setSelected] = useState("option1");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Radio
          name="interactive"
          label="Option 1"
          value="option1"
          checked={selected === "option1"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <Radio
          name="interactive"
          label="Option 2"
          value="option2"
          checked={selected === "option2"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <Radio
          name="interactive"
          label="Option 3"
          value="option3"
          checked={selected === "option3"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <p>Selected: {selected}</p>
      </div>
    );
  },
};

// Select Stories
export const SelectDefault: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <Label htmlFor="select-default">Choose an option</Label>
      <Select
        id="select-default"
        placeholder="Select an option..."
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
          { value: "option4", label: "Option 4" },
        ]}
      />
    </div>
  ),
};

export const SelectStates: Story = {
  render: () => (
    <div
      style={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div>
        <Label htmlFor="select-error">Error State</Label>
        <Select
          id="select-error"
          error
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ]}
        />
      </div>
      <div>
        <Label htmlFor="select-success">Success State</Label>
        <Select
          id="select-success"
          success
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ]}
        />
      </div>
      <div>
        <Label htmlFor="select-warning">Warning State</Label>
        <Select
          id="select-warning"
          warning
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ]}
        />
      </div>
      <div>
        <Label htmlFor="select-disabled">Disabled State</Label>
        <Select
          id="select-disabled"
          disabled
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ]}
        />
      </div>
    </div>
  ),
};

export const SelectWithDisabledOptions: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <Label htmlFor="select-disabled-options">
        Select with disabled options
      </Label>
      <Select
        id="select-disabled-options"
        placeholder="Choose an option..."
        options={[
          { value: "option1", label: "Available Option 1" },
          { value: "option2", label: "Available Option 2" },
          { value: "option3", label: "Disabled Option 1", disabled: true },
          { value: "option4", label: "Available Option 3" },
          { value: "option5", label: "Disabled Option 2", disabled: true },
        ]}
      />
    </div>
  ),
};

export const SelectInteractive: Story = {
  render: () => {
    const [selected, setSelected] = useState("");
    return (
      <div style={{ width: "300px" }}>
        <Label htmlFor="select-interactive">Interactive Select</Label>
        <Select
          id="select-interactive"
          placeholder="Choose an option..."
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
        <p
          style={{
            marginTop: "8px",
            fontSize: "14px",
            color: "hsl(var(--muted-foreground))",
          }}
        >
          Selected: {selected || "None"}
        </p>
      </div>
    );
  },
};

// Combined Form Example
export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
      newsletter: false,
      notifications: "email",
      country: "",
    });

    return (
      <div
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h3>Contact Form</h3>

        <div>
          <Label htmlFor="name" required>
            Name
          </Label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid hsl(var(--border))",
              borderRadius: "6px",
              background: "hsl(var(--input))",
            }}
          />
        </div>

        <div>
          <Label htmlFor="email" required>
            Email
          </Label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid hsl(var(--border))",
              borderRadius: "6px",
              background: "hsl(var(--input))",
            }}
          />
        </div>

        <div>
          <Label htmlFor="country">Country</Label>
          <Select
            id="country"
            placeholder="Select your country..."
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
            options={[
              { value: "us", label: "United States" },
              { value: "uk", label: "United Kingdom" },
              { value: "ca", label: "Canada" },
              { value: "au", label: "Australia" },
            ]}
          />
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Enter your message..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={4}
          />
        </div>

        <div>
          <Checkbox
            label="Subscribe to newsletter"
            checked={formData.newsletter}
            onChange={(e) =>
              setFormData({ ...formData, newsletter: e.target.checked })
            }
          />
        </div>

        <div>
          <Label>Notification Preferences</Label>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginTop: "8px",
            }}
          >
            <Radio
              name="notifications"
              label="Email notifications"
              value="email"
              checked={formData.notifications === "email"}
              onChange={(e) =>
                setFormData({ ...formData, notifications: e.target.value })
              }
            />
            <Radio
              name="notifications"
              label="SMS notifications"
              value="sms"
              checked={formData.notifications === "sms"}
              onChange={(e) =>
                setFormData({ ...formData, notifications: e.target.value })
              }
            />
            <Radio
              name="notifications"
              label="No notifications"
              value="none"
              checked={formData.notifications === "none"}
              onChange={(e) =>
                setFormData({ ...formData, notifications: e.target.value })
              }
            />
          </div>
        </div>

        <div
          style={{
            marginTop: "16px",
            padding: "12px",
            background: "hsl(var(--muted))",
            borderRadius: "6px",
          }}
        >
          <h4>Form Data:</h4>
          <pre style={{ fontSize: "12px", margin: 0 }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};
