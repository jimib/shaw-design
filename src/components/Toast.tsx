import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import styled, { keyframes } from "styled-components";

// Toast Types
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

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Animations
const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideInDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const slideOutUp = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const slideOutDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

// Toast Container
const ToastContainer = styled.div<{
  $position: Toast["position"];
}>`
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: 400px;
  pointer-events: none;

  ${({ $position }) => {
    switch ($position) {
      case "top-right":
        return `
          top: ${({ theme }) => theme.spacing.md};
          right: ${({ theme }) => theme.spacing.md};
        `;
      case "top-left":
        return `
          top: ${({ theme }) => theme.spacing.md};
          left: ${({ theme }) => theme.spacing.md};
        `;
      case "bottom-right":
        return `
          bottom: ${({ theme }) => theme.spacing.md};
          right: ${({ theme }) => theme.spacing.md};
        `;
      case "bottom-left":
        return `
          bottom: ${({ theme }) => theme.spacing.md};
          left: ${({ theme }) => theme.spacing.md};
        `;
      default:
        return `
          top: ${({ theme }) => theme.spacing.md};
          right: ${({ theme }) => theme.spacing.md};
        `;
    }
  }}
`;

// Individual Toast
const ToastItem = styled.div<{
  $variant: Toast["variant"];
  $position: Toast["position"];
  $isVisible: boolean;
}>`
  background: hsl(var(--card));
  border: 1px solid hsl(var(--border));
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.colors.shadows.elegant};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  pointer-events: auto;
  min-width: 300px;
  max-width: 400px;

  ${({ $variant }) => {
    switch ($variant) {
      case "success":
        return `
          border-left: 4px solid hsl(var(--success));
          background: hsl(var(--success) / 0.1);
        `;
      case "error":
        return `
          border-left: 4px solid hsl(var(--destructive));
          background: hsl(var(--destructive) / 0.1);
        `;
      case "warning":
        return `
          border-left: 4px solid hsl(var(--warning));
          background: hsl(var(--warning) / 0.1);
        `;
      case "info":
        return `
          border-left: 4px solid hsl(var(--info));
          background: hsl(var(--info) / 0.1);
        `;
      default:
        return `
          border-left: 4px solid hsl(var(--primary));
          background: hsl(var(--primary) / 0.1);
        `;
    }
  }}

  ${({ $position, $isVisible }) => {
    if (!$isVisible) {
      switch ($position) {
        case "top-right":
        case "bottom-right":
          return `animation: ${slideOutRight} 0.3s ease-in-out forwards;`;
        case "top-left":
        case "bottom-left":
          return `animation: ${slideOutLeft} 0.3s ease-in-out forwards;`;
        default:
          return `animation: ${slideOutRight} 0.3s ease-in-out forwards;`;
      }
    }

    switch ($position) {
      case "top-right":
      case "bottom-right":
        return `animation: ${slideInRight} 0.3s ease-in-out;`;
      case "top-left":
      case "bottom-left":
        return `animation: ${slideInLeft} 0.3s ease-in-out;`;
      default:
        return `animation: ${slideInRight} 0.3s ease-in-out;`;
    }
  }}
`;

const ToastContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const ToastMessage = styled.div<{
  $variant: Toast["variant"];
}>`
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: hsl(var(--foreground));
  line-height: 1.4;

  ${({ $variant }) => {
    switch ($variant) {
      case "success":
        return `color: hsl(var(--success));`;
      case "error":
        return `color: hsl(var(--destructive));`;
      case "warning":
        return `color: hsl(var(--warning));`;
      case "info":
        return `color: hsl(var(--info));`;
      default:
        return `color: hsl(var(--foreground));`;
    }
  }}
`;

const ToastActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const ToastActionButton = styled.button<{
  $variant: Toast["variant"];
}>`
  background: none;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.textStyles.caption.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.colors.transitions.smooth};

  ${({ $variant }) => {
    switch ($variant) {
      case "success":
        return `
          color: hsl(var(--success));
          &:hover {
            background: hsl(var(--success) / 0.1);
          }
        `;
      case "error":
        return `
          color: hsl(var(--destructive));
          &:hover {
            background: hsl(var(--destructive) / 0.1);
          }
        `;
      case "warning":
        return `
          color: hsl(var(--warning));
          &:hover {
            background: hsl(var(--warning) / 0.1);
          }
        `;
      case "info":
        return `
          color: hsl(var(--info));
          &:hover {
            background: hsl(var(--info) / 0.1);
          }
        `;
      default:
        return `
          color: hsl(var(--primary));
          &:hover {
            background: hsl(var(--primary) / 0.1);
          }
        `;
    }
  }}
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  color: hsl(var(--muted-foreground));
  transition: ${({ theme }) => theme.colors.transitions.smooth};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;

  &:hover {
    background: hsl(var(--muted));
    color: hsl(var(--foreground));
  }
`;

const ToastIcon = styled.div<{
  $variant: Toast["variant"];
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;

  ${({ $variant }) => {
    switch ($variant) {
      case "success":
        return `color: hsl(var(--success));`;
      case "error":
        return `color: hsl(var(--destructive));`;
      case "warning":
        return `color: hsl(var(--warning));`;
      case "info":
        return `color: hsl(var(--info));`;
      default:
        return `color: hsl(var(--primary));`;
    }
  }}
`;

// Toast Provider Component
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = {
      id,
      duration: 5000,
      position: "top-right",
      variant: "info",
      ...toast,
    };

    setToasts((prev) => [...prev, newToast]);

    // Auto-remove toast after duration
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, newToast.duration);
    }

    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, removeToast, clearAllToasts }}
    >
      {children}
      <ToastRenderer />
    </ToastContext.Provider>
  );
};

// Toast Renderer Component
const ToastRenderer: React.FC = () => {
  const { toasts } = useToast();

  // Group toasts by position
  const toastsByPosition = toasts.reduce((acc, toast) => {
    const position = toast.position || "top-right";
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(toast);
    return acc;
  }, {} as Record<string, Toast[]>);

  return (
    <>
      {Object.entries(toastsByPosition).map(([position, positionToasts]) => (
        <ToastContainer
          key={position}
          $position={position as Toast["position"]}
        >
          {positionToasts.map((toast) => (
            <ToastItem
              key={toast.id}
              $variant={toast.variant}
              $position={toast.position}
              $isVisible={true}
            >
              {toast.icon && (
                <ToastIcon $variant={toast.variant}>{toast.icon}</ToastIcon>
              )}
              <ToastContent>
                <ToastMessage $variant={toast.variant}>
                  {toast.message}
                </ToastMessage>
                {toast.action && (
                  <ToastActions>
                    <ToastActionButton
                      $variant={toast.variant}
                      onClick={toast.action.onClick}
                    >
                      {toast.action.label}
                    </ToastActionButton>
                  </ToastActions>
                )}
              </ToastContent>
              <CloseButton onClick={() => removeToast(toast.id)}>×</CloseButton>
            </ToastItem>
          ))}
        </ToastContainer>
      ))}
    </>
  );
};

// Hook to use toast context
export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

// Individual Toast Component (for backward compatibility)
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

export const Toast: React.FC<IndividualToastProps> = ({
  message,
  variant = "info",
  duration = 5000,
  position = "top-right",
  onClose,
  action,
  icon,
  isVisible = true,
}) => {
  const { addToast, removeToast } = useToast();

  useEffect(() => {
    const id = addToast({
      message,
      variant,
      duration,
      position,
      onClose,
      action,
      icon,
    });

    return () => {
      removeToast(id);
    };
  }, [
    addToast,
    removeToast,
    message,
    variant,
    duration,
    position,
    onClose,
    action,
    icon,
  ]);

  return null;
};
