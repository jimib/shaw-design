import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createContext, useContext, useState, useCallback, useEffect, } from "react";
import styled, { keyframes, css } from "styled-components";
const ToastContext = createContext(undefined);
// Animations
const slideInRight = keyframes `
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const slideInLeft = keyframes `
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const slideInUp = keyframes `
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const slideInDown = keyframes `
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const slideOutRight = keyframes `
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;
const slideOutLeft = keyframes `
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;
const slideOutUp = keyframes `
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;
const slideOutDown = keyframes `
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
const ToastContainer = styled.div `
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: 400px;
  pointer-events: none;

  ${({ $position, theme }) => {
    switch ($position) {
        case "top-right":
            return css `
          top: ${theme.spacing.md};
          right: ${theme.spacing.md};
        `;
        case "top-left":
            return css `
          top: ${theme.spacing.md};
          left: ${theme.spacing.md};
        `;
        case "bottom-right":
            return css `
          bottom: ${theme.spacing.md};
          right: ${theme.spacing.md};
        `;
        case "bottom-left":
            return css `
          bottom: ${theme.spacing.md};
          left: ${theme.spacing.md};
        `;
        default:
            return css `
          top: ${theme.spacing.md};
          right: ${theme.spacing.md};
        `;
    }
}}
`;
// Individual Toast
const ToastItem = styled.div `
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
                return css `
            animation: ${slideOutRight} 0.3s ease-in-out forwards;
          `;
            case "top-left":
            case "bottom-left":
                return css `
            animation: ${slideOutLeft} 0.3s ease-in-out forwards;
          `;
            default:
                return css `
            animation: ${slideOutRight} 0.3s ease-in-out forwards;
          `;
        }
    }
    switch ($position) {
        case "top-right":
        case "bottom-right":
            return css `
          animation: ${slideInRight} 0.3s ease-in-out;
        `;
        case "top-left":
        case "bottom-left":
            return css `
          animation: ${slideInLeft} 0.3s ease-in-out;
        `;
        default:
            return css `
          animation: ${slideInRight} 0.3s ease-in-out;
        `;
    }
}}
`;
const ToastContent = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;
const ToastMessage = styled.div `
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
const ToastActions = styled.div `
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;
const ToastActionButton = styled.button `
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
const CloseButton = styled.button `
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
const ToastIcon = styled.div `
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
export const ToastProvider = ({ children, }) => {
    const [toasts, setToasts] = useState([]);
    const addToast = useCallback((toast) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast = {
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
    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);
    const clearAllToasts = useCallback(() => {
        setToasts([]);
    }, []);
    return (_jsxs(ToastContext.Provider, { value: { toasts, addToast, removeToast, clearAllToasts }, children: [children, _jsx(ToastRenderer, {})] }));
};
// Toast Renderer Component
const ToastRenderer = () => {
    const { toasts, removeToast } = useToast();
    // Group toasts by position
    const toastsByPosition = toasts.reduce((acc, toast) => {
        const position = toast.position || "top-right";
        if (!acc[position]) {
            acc[position] = [];
        }
        acc[position].push(toast);
        return acc;
    }, {});
    return (_jsx(_Fragment, { children: Object.entries(toastsByPosition).map(([position, positionToasts]) => (_jsx(ToastContainer, { "$position": position, children: positionToasts.map((toast) => (_jsxs(ToastItem, { "$variant": toast.variant, "$position": toast.position, "$isVisible": true, children: [toast.icon && (_jsx(ToastIcon, { "$variant": toast.variant, children: toast.icon })), _jsxs(ToastContent, { children: [_jsx(ToastMessage, { "$variant": toast.variant, children: toast.message }), toast.action && (_jsx(ToastActions, { children: _jsx(ToastActionButton, { "$variant": toast.variant, onClick: toast.action.onClick, children: toast.action.label }) }))] }), _jsx(CloseButton, { onClick: () => removeToast(toast.id), children: "\u00D7" })] }, toast.id))) }, position))) }));
};
// Hook to use toast context
export const useToast = () => {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};
export const Toast = ({ message, variant = "info", duration = 5000, position = "top-right", onClose, action, icon, isVisible = true, }) => {
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
