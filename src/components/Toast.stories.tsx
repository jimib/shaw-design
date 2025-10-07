import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider, useToast } from "./Toast";
import { Button } from "./Button";

const meta: Meta<typeof ToastProvider> = {
  title: "Components/Toast",
  component: ToastProvider,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

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

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h2>Toast Examples</h2>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <Button onClick={showSuccessToast} variant="primary">
          Success Toast
        </Button>
        <Button onClick={showErrorToast} variant="primary">
          Error Toast
        </Button>
        <Button onClick={showWarningToast} variant="primary">
          Warning Toast
        </Button>
        <Button onClick={showInfoToast} variant="primary">
          Info Toast
        </Button>
      </div>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <Button onClick={showToastWithAction} variant="secondary">
          Toast with Action
        </Button>
        <Button onClick={showToastWithIcon} variant="secondary">
          Toast with Icon
        </Button>
        <Button onClick={showMultipleToasts} variant="secondary">
          Multiple Toasts
        </Button>
        <Button onClick={clearAllToasts} variant="outline">
          Clear All
        </Button>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
};

export const AllVariants: Story = {
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

      return (
        <div style={{ padding: "20px" }}>
          <h2>All Toast Variants</h2>
          <Button onClick={showAllVariants}>Show All Variants</Button>
        </div>
      );
    };

    return (
      <ToastProvider>
        <AllVariantsDemo />
      </ToastProvider>
    );
  },
};

export const AllPositions: Story = {
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

      return (
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <h2>Toast Positions</h2>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Button onClick={showTopRight}>Top Right</Button>
            <Button onClick={showTopLeft}>Top Left</Button>
            <Button onClick={showBottomRight}>Bottom Right</Button>
            <Button onClick={showBottomLeft}>Bottom Left</Button>
          </div>
        </div>
      );
    };

    return (
      <ToastProvider>
        <AllPositionsDemo />
      </ToastProvider>
    );
  },
};

export const WithActions: Story = {
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

      return (
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <h2>Toasts with Actions</h2>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Button onClick={showUndoToast}>Undo Action</Button>
            <Button onClick={showDownloadToast}>Download Action</Button>
          </div>
        </div>
      );
    };

    return (
      <ToastProvider>
        <WithActionsDemo />
      </ToastProvider>
    );
  },
};

export const CustomDuration: Story = {
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

      return (
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <h2>Custom Duration Toasts</h2>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Button onClick={showQuickToast}>Quick Toast (1s)</Button>
            <Button onClick={showLongToast}>Long Toast (10s)</Button>
            <Button onClick={showPersistentToast}>Persistent Toast</Button>
          </div>
        </div>
      );
    };

    return (
      <ToastProvider>
        <CustomDurationDemo />
      </ToastProvider>
    );
  },
};

export const StackingExample: Story = {
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

      return (
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <h2>Toast Stacking</h2>
          <p>
            Click the button to see how multiple toasts stack in the same
            position.
          </p>
          <Button onClick={showStackedToasts}>Show Stacked Toasts</Button>
        </div>
      );
    };

    return (
      <ToastProvider>
        <StackingDemo />
      </ToastProvider>
    );
  },
};
