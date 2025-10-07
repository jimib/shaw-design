import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  animation?: "fade" | "slide" | "none";
  zIndex?: number;
  children: React.ReactNode;
  className?: string;
}

const ModalOverlay = styled.div<{
  $isOpen: boolean;
  $animation: ModalProps["animation"];
  $zIndex: number;
}>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
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

const ModalContent = styled.div<{
  $size: ModalProps["size"];
  $isOpen: boolean;
  $animation: ModalProps["animation"];
}>`
  background: hsl(var(--card));
  border: 1px solid hsl(var(--border));
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.colors.shadows.elegant};
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  width: 100%;

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
          transform: translateY(0);
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

const CloseButton = styled(Button)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  z-index: 1;
`;

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  size = "md",
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  animation = "fade",
  zIndex = 50,
  children,
  className,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // Handle focus trap
  useEffect(() => {
    if (!isOpen) return;

    const modal = modalRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
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
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay
      $isOpen={isOpen}
      $animation={animation}
      $zIndex={zIndex}
      onClick={handleOverlayClick}
    >
      <ModalContent
        ref={modalRef}
        $size={size}
        $isOpen={isOpen}
        $animation={animation}
        className={className}
      >
        {showCloseButton && (
          <CloseButton
            variant="ghost"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </CloseButton>
        )}
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
