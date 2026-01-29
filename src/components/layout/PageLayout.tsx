import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Main } from "./Main";
import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "./Sidebar";
import { Container } from "./Container";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  showSidebar?: boolean;
  sidebarVariant?: "default" | "floating" | "inset";
  mainVariant?: "default" | "centered" | "full-width";
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}

const LayoutWrapper = styled.div<{ $hasSidebar: boolean }>`
  display: flex;
  height: 100vh;
  background: hsl(var(--background));
  overflow: hidden;
  position: relative;

  ${({ $hasSidebar }) =>
    $hasSidebar &&
    `
    @media (min-width: 768px) {
      .sidebar {
        width: 280px;
        flex-shrink: 0;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
      }
      
      .main-content {
        flex: 1;
        margin-left: 280px;
        height: 100vh;
        overflow: hidden;
      }
    }
  `}
`;

const MainContent = styled.div<{ $hasSidebar: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  ${({ $hasSidebar }) =>
    $hasSidebar &&
    `
    @media (min-width: 768px) {
      margin-left: 280px;
    }
  `}
`;

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  className,
  header,
  sidebar,
  showSidebar = false,
  sidebarVariant = "default",
  mainVariant = "default",
  containerSize = "lg",
}) => {
  if (!showSidebar) {
    return (
      <LayoutWrapper $hasSidebar={false} className={className}>
        <MainContent $hasSidebar={false} className="main-content">
          {header}

          <Main variant={mainVariant}>
            <Container size={containerSize}>{children}</Container>
          </Main>
        </MainContent>
      </LayoutWrapper>
    );
  }

  // Clone header and add showSidebarTrigger prop if it's a Header component
  const enhancedHeader = header && React.isValidElement(header)
    ? React.cloneElement(header, { showSidebarTrigger: true } as any)
    : header;

  return (
    <SidebarProvider>
      <LayoutWrapper $hasSidebar={showSidebar} className={className}>
        {sidebar && (
          <div className="sidebar">
            <Sidebar variant={sidebarVariant}>{sidebar}</Sidebar>
          </div>
        )}

        <MainContent $hasSidebar={showSidebar} className="main-content">
          {enhancedHeader}

          <Main variant={mainVariant}>
            <Container size={containerSize}>{children}</Container>
          </Main>
        </MainContent>
      </LayoutWrapper>
    </SidebarProvider>
  );
};

// Pre-built layout combinations
export const AuthLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <PageLayout mainVariant="centered" containerSize="sm">
    {children}
  </PageLayout>
);

export const DashboardLayout: React.FC<{
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
}> = ({ children, sidebar, header }) => (
  <PageLayout
    showSidebar={!!sidebar}
    sidebar={sidebar}
    header={header}
    sidebarVariant="default"
    containerSize="full"
  >
    {children}
  </PageLayout>
);

export const ContentLayout: React.FC<{
  children: React.ReactNode;
  header?: React.ReactNode;
}> = ({ children, header }) => (
  <PageLayout header={header} containerSize="lg">
    {children}
  </PageLayout>
);

