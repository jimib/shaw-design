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
  min-height: 100vh;
  background: hsl(var(--background));

  ${({ $hasSidebar }) =>
    $hasSidebar &&
    `
    @media (min-width: 768px) {
      .sidebar {
        width: 280px;
        flex-shrink: 0;
      }
      
      .main-content {
        flex: 1;
        margin-left: 0;
      }
    }
  `}
`;

const MainContent = styled.div<{ $hasSidebar: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

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
  const content = (
    <LayoutWrapper $hasSidebar={showSidebar} className={className}>
      {showSidebar && sidebar && (
        <div className="sidebar">
          <Sidebar variant={sidebarVariant}>{sidebar}</Sidebar>
        </div>
      )}

      <MainContent $hasSidebar={showSidebar} className="main-content">
        {header}

        <Main variant={mainVariant}>
          <Container size={containerSize}>{children}</Container>
        </Main>
      </MainContent>
    </LayoutWrapper>
  );

  if (showSidebar) {
    return <SidebarProvider>{content}</SidebarProvider>;
  }

  return content;
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
