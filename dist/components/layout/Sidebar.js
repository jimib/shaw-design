import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState, useCallback, useEffect, } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Logo } from "../Logo";
const SidebarContext = createContext(null);
export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};
// Mobile detection hook
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(undefined);
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);
    return !!isMobile;
};
export const SidebarProvider = ({ children, defaultOpen = true, }) => {
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const toggleSidebar = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);
    const setOpen = useCallback((open) => {
        setIsOpen(open);
    }, []);
    const contextValue = {
        isOpen: isMobile ? false : isOpen,
        isMobile,
        toggleSidebar,
        setOpen,
    };
    return (_jsx(SidebarContext.Provider, { value: contextValue, children: children }));
};
const StyledSidebar = styled.aside `
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  background: hsl(var(--sidebar-background));
  color: hsl(var(--sidebar-foreground));
  border-right: 1px solid hsl(var(--sidebar-border));
  transform: ${({ $isOpen }) => $isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 50;
  overflow-y: auto;

  ${({ $variant }) => {
    switch ($variant) {
        case "floating":
            return `
          margin: 16px;
          border-radius: 12px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        `;
        case "inset":
            return `
          margin: 16px;
          border-radius: 12px;
          box-shadow: inset 0 1px 0 0 hsl(var(--sidebar-border));
        `;
        default:
            return ``;
    }
}}

  @media (min-width: 768px) {
    position: relative;
    transform: none;
    height: 100vh;
  }
`;
const SidebarOverlay = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 40;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  @media (min-width: 768px) {
    display: none;
  }
`;
export const Sidebar = ({ children, className, variant = "default", }) => {
    const { isOpen, isMobile } = useSidebar();
    return (_jsxs(_Fragment, { children: [isMobile && (_jsx(SidebarOverlay, { "$isOpen": isOpen, onClick: () => useSidebar().setOpen(false) })), _jsx(StyledSidebar, { "$isOpen": isOpen, "$variant": variant, className: className, children: children })] }));
};
const StyledSidebarHeader = styled.div `
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid hsl(var(--sidebar-border));
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;
export const SidebarHeader = ({ children, showLogo = true, logoVariant = "shaw", title, className, }) => {
    return (_jsxs(StyledSidebarHeader, { className: className, children: [showLogo && _jsx(Logo, { variant: logoVariant, size: 32 }), title && (_jsx("h2", { style: { margin: 0, fontSize: "1.25rem", fontWeight: 600 }, children: title })), children] }));
};
const StyledSidebarContent = styled.div `
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  overflow-y: auto;
`;
export const SidebarContent = ({ children, className, }) => {
    return (_jsx(StyledSidebarContent, { className: className, children: children }));
};
const StyledSidebarFooter = styled.div `
  padding: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid hsl(var(--sidebar-border));
`;
export const SidebarFooter = ({ children, className, }) => {
    return (_jsx(StyledSidebarFooter, { className: className, children: children }));
};
export const SidebarTrigger = ({ className, }) => {
    const { toggleSidebar } = useSidebar();
    return (_jsx(Button, { variant: "ghost", size: "sm", onClick: toggleSidebar, className: className, children: "\u2630" }));
};
const StyledSidebarMenu = styled.ul `
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;
export const SidebarMenu = ({ children, className, }) => {
    return (_jsx(StyledSidebarMenu, { className: className, children: children }));
};
const StyledSidebarMenuItem = styled.li `
  list-style: none;

  a {
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.sm}
      ${({ theme }) => theme.spacing.md};
    color: hsl(var(--sidebar-foreground));
    text-decoration: none;
    border-radius: 8px;
    transition: ${({ theme }) => theme.colors.transitions.smooth};

    &:hover {
      background: hsl(var(--sidebar-accent));
      color: hsl(var(--sidebar-accent-foreground));
    }

    ${({ $active }) => $active &&
    `
      background: hsl(var(--sidebar-accent));
      color: hsl(var(--sidebar-accent-foreground));
      font-weight: 600;
    `}
  }
`;
export const SidebarMenuItem = ({ children, className, active = false, }) => {
    return (_jsx(StyledSidebarMenuItem, { "$active": active, className: className, children: children }));
};
