import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
const StyledSeparator = styled.hr `
  border: none;
  background: hsl(var(--border));
  margin: 0;

  ${({ $orientation }) => {
    switch ($orientation) {
        case "vertical":
            return `
          width: 1px;
          height: 100%;
        `;
        default:
            return `
          height: 1px;
          width: 100%;
        `;
    }
}}
`;
export const Separator = ({ orientation = "horizontal", className, decorative = true, style, }) => {
    return (_jsx(StyledSeparator, { "$orientation": orientation, className: className, style: style, role: decorative ? "none" : "separator", "aria-orientation": orientation }));
};
