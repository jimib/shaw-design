import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Button } from "./Button";
const ModalOverlay = styled.div `
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ $zIndex }) => $zIndex};
  padding: ${({ theme }) => theme.spacing.md};

  ${({ $isOpen, $animation }) => {
    if (!$isOpen) {
        return `
        opacity: 0;
        pointer-events: none;
      `;
    }
    switch ($animation) {
        case "fade":
            return `
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
        `;
        case "slide":
            return `
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
        `;
        default:
            return `
          opacity: 1;
        `;
    }
}}
`;
const ModalContent = styled.div `
  background: linear-gradient(
    145deg,
    hsl(var(--card)) 0%,
    hsl(312 30% 15%) 100%
  );
  background-opacity: 0.9;
  backdrop-filter: blur(16px);
  border: 2px solid hsl(var(--primary) / 0.3);
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.colors.shadows.elegant};
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  width: 100%;
  color: hsl(var(--card-foreground));
  padding: ${({ theme }) => theme.spacing.md};

  ${({ $size }) => {
    switch ($size) {
        case "sm":
            return `
          max-width: 400px;
        `;
        case "md":
            return `
          max-width: 600px;
        `;
        case "lg":
            return `
          max-width: 800px;
        `;
        case "xl":
            return `
          max-width: 1000px;
        `;
        case "full":
            return `
          max-width: 95vw;
          max-height: 95vh;
        `;
        default:
            return `
          max-width: 600px;
        `;
    }
}}

  ${({ $isOpen, $animation }) => {
    if (!$isOpen) {
        return `
        transform: scale(0.95);
        opacity: 0;
    ${$animation === "slide" &&
            `
        transform: translateY(100%);
      `}
      `;
    }
    switch ($animation) {
        case "fade":
            return `
          transform: scale(1);
          opacity: 1;
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        `;
        case "slide":
            return `
          transform: translateY(0px);
          opacity: 1;
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        `;
        default:
            return `
          transform: scale(1);
          opacity: 1;
        `;
    }
}}
`;
const CloseButton = styled(Button) `
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  z-index: 1;
  background: hsl(var(--primary) / 0.1);
  border: 2px solid hsl(var(--primary) / 0.2);
  color: hsl(var(--primary));

  &:hover {
    background: hsl(var(--primary) / 0.2);
    border-color: hsl(var(--primary) / 0.3);
  }
`;
export const Modal = ({ isOpen, onClose, size = "md", showCloseButton = true, closeOnOverlayClick = true, closeOnEscape = true, animation = "fade", zIndex = 50, children, className, }) => {
    const modalRef = useRef(null);
    // Handle escape key
    useEffect(() => {
        if (!isOpen || !closeOnEscape)
            return;
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, closeOnEscape, onClose]);
    // Handle focus trap
    useEffect(() => {
        if (!isOpen)
            return;
        const modal = modalRef.current;
        if (!modal)
            return;
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const handleTabKey = (event) => {
            if (event.key !== "Tab")
                return;
            if (event.shiftKey) {
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement?.focus();
                }
            }
            else {
                if (document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement?.focus();
                }
            }
        };
        firstElement?.focus();
        document.addEventListener("keydown", handleTabKey);
        return () => {
            document.removeEventListener("keydown", handleTabKey);
        };
    }, [isOpen]);
    // Handle overlay click
    const handleOverlayClick = (event) => {
        if (closeOnOverlayClick && event.target === event.currentTarget) {
            onClose();
        }
    };
    // if (!isOpen) return null;
    return (_jsx(ModalOverlay, { "$isOpen": isOpen, "$animation": animation, "$zIndex": zIndex, onClick: handleOverlayClick, children: _jsx(ModalContent, { ref: modalRef, "$size": size, "$isOpen": isOpen, "$animation": animation, className: className, children: isOpen && children }) }));
};
export const ModalHeader = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
export const ModalTitle = styled.h2 `
  font-size: ${({ theme }) => theme.typography.textStyles.h2.fontSize};
  text-align: center;
`;
export const ModalBody = styled.div `
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
export const ModalFooter = styled.div `
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.spacing.md};
`;
