import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalProps,
  ModalTitle,
} from "./Modal";
import { Button } from "./Button";
// import { Card, CardHeader, CardTitle, CardContent } from "./Card";

const meta: Meta<typeof Modal> = {
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
type Story = StoryObj<typeof meta>;

// Helper component for stories
const ModalExample = ({
  size = "md",
  animation = "fade",
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}: {
  size?: ModalProps["size"];
  animation?: ModalProps["animation"];
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size={size}
        animation={animation}
        showCloseButton={showCloseButton}
        closeOnOverlayClick={closeOnOverlayClick}
        closeOnEscape={closeOnEscape}
      >
        <ModalHeader>
          <ModalTitle>Modal Example</ModalTitle>{" "}
        </ModalHeader>
        <ModalBody>
          <p>This is a modal dialog example.</p>
          <p>You can close it by:</p>
          <ul>
            <li>Clicking the X button (if enabled)</li>
            <li>Clicking outside the modal (if enabled)</li>
            <li>Pressing the Escape key (if enabled)</li>
          </ul>
        </ModalBody>

        <ModalFooter>
          <Button onClick={() => setIsOpen(false)}>Close Modal</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => <ModalExample />,
};

export const Small: Story = {
  render: () => <ModalExample size="sm" />,
};

export const Large: Story = {
  render: () => <ModalExample size="lg" />,
};

export const ExtraLarge: Story = {
  render: () => <ModalExample size="xl" />,
};

export const FullScreen: Story = {
  render: () => <ModalExample size="full" />,
};

export const SlideAnimation: Story = {
  render: () => <ModalExample animation="slide" />,
};

export const NoAnimation: Story = {
  render: () => <ModalExample animation="none" />,
};

export const NoCloseButton: Story = {
  render: () => <ModalExample showCloseButton={false} />,
};

export const NoOverlayClose: Story = {
  render: () => <ModalExample closeOnOverlayClick={false} />,
};

export const NoEscapeClose: Story = {
  render: () => <ModalExample closeOnEscape={false} />,
};

export const FormExample: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "" });

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Form Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="md">
          <ModalHeader>
            <ModalTitle>Contact Form</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div>
              <label
                htmlFor="name"
                style={{ display: "block", marginBottom: "4px" }}
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
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
              <label
                htmlFor="email"
                style={{ display: "block", marginBottom: "4px" }}
              >
                Email
              </label>
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
            <div
              style={{
                display: "flex",
                gap: "8px",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>Submit</Button>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const [openSize, setOpenSize] = useState<ModalProps["size"] | null>(null);

    return (
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {(["sm", "md", "lg", "xl", "full"] as const).map((size) => (
          <Button key={size} onClick={() => setOpenSize(size)}>
            {size.toUpperCase()} Modal
          </Button>
        ))}

        {openSize && (
          <Modal
            isOpen={true}
            onClose={() => setOpenSize(null)}
            size={openSize}
          >
            <ModalHeader>
              <ModalTitle>{openSize.toUpperCase()} Modal</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <p>This is a {openSize} sized modal.</p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setOpenSize(null)}>Close</Button>
            </ModalFooter>
          </Modal>
        )}
      </div>
    );
  },
};

export const NewDesignShowcase: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Show New Design Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="lg"
          animation="fade"
        >
          <h2
            style={{
              margin: "0 0 16px 0",
              fontSize: "24px",
              fontWeight: "600",
              color: "hsl(var(--card-foreground))",
            }}
          >
            New Modal Design
          </h2>
          <p
            style={{
              margin: "0 0 20px 0",
              color: "hsl(var(--card-foreground))",
              opacity: 0.8,
            }}
          >
            This modal features the new design with:
          </p>
          <ul
            style={{
              margin: "0 0 20px 0",
              paddingLeft: "20px",
              color: "hsl(var(--card-foreground))",
            }}
          >
            <li>Pink border with 30% opacity</li>
            <li>Gradient card background with 90% opacity</li>
            <li>Backdrop blur effect</li>
            <li>Enhanced shadow styling</li>
          </ul>
          <div style={{ display: "flex", gap: "8px" }}>
            <Button onClick={() => setIsOpen(false)}>Close Modal</Button>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};
