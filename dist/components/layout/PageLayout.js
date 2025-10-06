import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { Main } from "./Main";
import { Sidebar, SidebarProvider, } from "./Sidebar";
import { Container } from "./Container";
const LayoutWrapper = styled.div `
  display: flex;
  min-height: 100vh;
  background: hsl(var(--background));

  ${({ $hasSidebar }) => $hasSidebar &&
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
const MainContent = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${({ $hasSidebar }) => $hasSidebar &&
    `
    @media (min-width: 768px) {
      margin-left: 280px;
    }
  `}
`;
export const PageLayout = ({ children, className, header, sidebar, showSidebar = false, sidebarVariant = "default", mainVariant = "default", containerSize = "lg", }) => {
    const content = (_jsxs(LayoutWrapper, { "$hasSidebar": showSidebar, className: className, children: [showSidebar && sidebar && (_jsx("div", { className: "sidebar", children: _jsx(Sidebar, { variant: sidebarVariant, children: sidebar }) })), _jsxs(MainContent, { "$hasSidebar": showSidebar, className: "main-content", children: [header, _jsx(Main, { variant: mainVariant, children: _jsx(Container, { size: containerSize, children: children }) })] })] }));
    if (showSidebar) {
        return _jsx(SidebarProvider, { children: content });
    }
    return content;
};
// Pre-built layout combinations
export const AuthLayout = ({ children, }) => (_jsx(PageLayout, { mainVariant: "centered", containerSize: "sm", children: children }));
export const DashboardLayout = ({ children, sidebar, header }) => (_jsx(PageLayout, { showSidebar: !!sidebar, sidebar: sidebar, header: header, sidebarVariant: "default", containerSize: "full", children: children }));
export const ContentLayout = ({ children, header }) => (_jsx(PageLayout, { header: header, containerSize: "lg", children: children }));
