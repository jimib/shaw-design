import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import styled from "styled-components";
import { Main } from "./Main";
import { Sidebar, SidebarProvider, } from "./Sidebar";
import { Container } from "./Container";
const LayoutWrapper = styled.div `
  display: flex;
  height: 100vh;
  background: hsl(var(--background));
  overflow: hidden;
  position: relative;

  ${({ $hasSidebar }) => $hasSidebar &&
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
const MainContent = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  ${({ $hasSidebar }) => $hasSidebar &&
    `
    @media (min-width: 768px) {
      margin-left: 280px;
    }
  `}
`;
export const PageLayout = ({ children, className, header, sidebar, showSidebar = false, sidebarVariant = "default", mainVariant = "default", containerSize = "lg", }) => {
    if (!showSidebar) {
        return (_jsx(LayoutWrapper, { "$hasSidebar": false, className: className, children: _jsxs(MainContent, { "$hasSidebar": false, className: "main-content", children: [header, _jsx(Main, { variant: mainVariant, children: _jsx(Container, { size: containerSize, children: children }) })] }) }));
    }
    // Clone header and add showSidebarTrigger prop if it's a Header component
    const enhancedHeader = header && React.isValidElement(header)
        ? React.cloneElement(header, { showSidebarTrigger: true })
        : header;
    return (_jsx(SidebarProvider, { children: _jsxs(LayoutWrapper, { "$hasSidebar": showSidebar, className: className, children: [sidebar && (_jsx("div", { className: "sidebar", children: _jsx(Sidebar, { variant: sidebarVariant, children: sidebar }) })), _jsxs(MainContent, { "$hasSidebar": showSidebar, className: "main-content", children: [enhancedHeader, _jsx(Main, { variant: mainVariant, children: _jsx(Container, { size: containerSize, children: children }) })] })] }) }));
};
// Pre-built layout combinations
export const AuthLayout = ({ children, }) => (_jsx(PageLayout, { mainVariant: "centered", containerSize: "sm", children: children }));
export const DashboardLayout = ({ children, sidebar, header }) => (_jsx(PageLayout, { showSidebar: !!sidebar, sidebar: sidebar, header: header, sidebarVariant: "default", containerSize: "full", children: children }));
export const ContentLayout = ({ children, header }) => (_jsx(PageLayout, { header: header, containerSize: "lg", children: children }));
