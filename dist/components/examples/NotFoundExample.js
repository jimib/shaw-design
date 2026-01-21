import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../";
import styled from "styled-components";
const NotFoundContainer = styled.div `
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: hsl(var(--muted));
`;
const NotFoundContent = styled.div `
  text-align: center;
`;
const NotFoundTitle = styled.h1 `
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: hsl(var(--foreground));
`;
const NotFoundMessage = styled.p `
  font-size: 20px;
  color: hsl(var(--muted-foreground));
  margin: 0 0 24px 0;
`;
export const NotFoundExample = () => {
    return (_jsx(NotFoundContainer, { children: _jsxs(NotFoundContent, { children: [_jsx(NotFoundTitle, { children: "404" }), _jsx(NotFoundMessage, { children: "Oops! Page not found" }), _jsx(Button, { variant: "primary", onClick: () => window.location.href = "/", children: "Return to Home" })] }) }));
};
