import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Logo } from "../Logo";
import { Separator } from "../Separator";

// Sidebar Context
interface SidebarContextType {
  isOpen: boolean;
  isMobile: boolean;
  toggleSidebar: () => void;
  setOpen: (open: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

// Mobile detection hook
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

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

// Sidebar Provider
interface SidebarProviderProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
  defaultOpen = true,
}) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const setOpen = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  const contextValue = {
    isOpen: isMobile ? false : isOpen,
    isMobile,
    toggleSidebar,
    setOpen,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};

// Sidebar Components
interface SidebarProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "floating" | "inset";
}

const StyledSidebar = styled.aside<{
  $isOpen: boolean;
  $variant: SidebarProps["variant"];
}>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  background: hsl(var(--sidebar-background));
  color: hsl(var(--sidebar-foreground));
  border-right: 1px solid hsl(var(--sidebar-border));
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 50;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

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
    position: fixed;
    transform: none;
    height: 100vh;
  }
`;

const SidebarOverlay = styled.div<{ $isOpen: boolean }>`
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

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  className,
  variant = "default",
}) => {
  const { isOpen, isMobile } = useSidebar();

  return (
    <>
      {isMobile && (
        <SidebarOverlay
          $isOpen={isOpen}
          onClick={() => useSidebar().setOpen(false)}
        />
      )}
      <StyledSidebar $isOpen={isOpen} $variant={variant} className={className}>
        {children}
      </StyledSidebar>
    </>
  );
};

// Sidebar Header
interface SidebarHeaderProps {
  children?: React.ReactNode;
  showLogo?: boolean;
  logoVariant?: "dark" | "light" | "shaw";
  title?: string;
  className?: string;
}

const StyledSidebarHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid hsl(var(--sidebar-border));
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  children,
  showLogo = true,
  logoVariant = "shaw",
  title,
  className,
}) => {
  return (
    <StyledSidebarHeader className={className}>
      {showLogo && <Logo variant={logoVariant} size={32} />}
      {title && (
        <h2 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 600 }}>
          {title}
        </h2>
      )}
      {children}
    </StyledSidebarHeader>
  );
};

// Sidebar Content
interface SidebarContentProps {
  children: React.ReactNode;
  className?: string;
}

const StyledSidebarContent = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  overflow-y: auto;
`;

export const SidebarContent: React.FC<SidebarContentProps> = ({
  children,
  className,
}) => {
  return (
    <StyledSidebarContent className={className}>
      {children}
    </StyledSidebarContent>
  );
};

// Sidebar Footer
interface SidebarFooterProps {
  children: React.ReactNode;
  className?: string;
}

const StyledSidebarFooter = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid hsl(var(--sidebar-border));
`;

export const SidebarFooter: React.FC<SidebarFooterProps> = ({
  children,
  className,
}) => {
  return (
    <StyledSidebarFooter className={className}>{children}</StyledSidebarFooter>
  );
};

// Sidebar Trigger
interface SidebarTriggerProps {
  className?: string;
}

export const SidebarTrigger: React.FC<SidebarTriggerProps> = ({
  className,
}) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleSidebar}
      className={className}
    >
      ☰
    </Button>
  );
};

// Sidebar Menu
interface SidebarMenuProps {
  children: React.ReactNode;
  className?: string;
}

const StyledSidebarMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  children,
  className,
}) => {
  return (
    <StyledSidebarMenu className={className}>{children}</StyledSidebarMenu>
  );
};

// Sidebar Menu Item
interface SidebarMenuItemProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

const StyledSidebarMenuItem = styled.li<{ $active: boolean }>`
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

    ${({ $active }) =>
      $active &&
      `
      // background: hsl(var(--sidebar-accent));
      // color: hsl(var(--sidebar-accent-foreground));
      font-weight: 600;
    `}
  }
`;

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  children,
  className,
  active = false,
}) => {
  return (
    <StyledSidebarMenuItem $active={active} className={className}>
      {children}
    </StyledSidebarMenuItem>
  );
};

