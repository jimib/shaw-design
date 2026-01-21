import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ChevronDown, Check } from "lucide-react";
const contentTypes = [
    "All Types",
    "Book",
    "Website",
    "Academic Essay",
    "Photo",
    "Archival Document",
    "Newspaper/Magazine",
    "Other Image",
    "Map/Plan/Aerial Photo",
    "Building",
    "Company",
    "Event",
    "Person",
    "Place",
    "Report",
    "Oral History",
    "Film",
];
const FilterContainer = styled.div `
  position: relative;
  display: inline-block;
`;
const FilterButton = styled.button `
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px;
  border-radius: 0.75rem;
  border: 1px solid hsl(var(--input));
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  font-size: ${({ theme }) => theme.typography.textStyles.body.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(", ")};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;

  &:hover {
    background: hsl(var(--accent));
  }

  &:focus {
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
  }
`;
const ChevronIcon = styled(ChevronDown) `
  width: 16px;
  height: 16px;
  color: hsl(var(--muted-foreground));
  transition: transform 0.2s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
const Dropdown = styled.div `
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  z-index: 50;
  min-width: 224px;
  max-height: 320px;
  overflow-y: auto;
  border-radius: 0.75rem;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--popover));
  box-shadow: var(--shadow-elevated);
  padding: 6px;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => $isOpen ? "scale(1) translateY(0)" : "scale(0.98) translateY(-4px)"};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: all 0.2s ease-in-out;
`;
const DropdownItem = styled.button `
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.typography.textStyles.body.fontSize};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(", ")};
  text-align: left;
  background: ${({ $isSelected }) => $isSelected ? "hsl(var(--primary) / 0.1)" : "transparent"};
  color: ${({ $isSelected }) => $isSelected ? "hsl(var(--primary))" : "hsl(var(--foreground))"};
  border: none;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  outline: none;

  &:hover {
    background: ${({ $isSelected }) => $isSelected ? "hsl(var(--primary) / 0.15)" : "hsl(var(--accent))"};
  }

  &:focus {
    background: hsl(var(--accent));
  }
`;
const CheckIcon = styled(Check) `
  width: 16px;
  height: 16px;
  color: hsl(var(--primary));
  flex-shrink: 0;
`;
export const TypeFilter = ({ value, onChange, className, style, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (_jsxs(FilterContainer, { ref: ref, className: className, style: style, children: [_jsxs(FilterButton, { "$isOpen": isOpen, onClick: () => setIsOpen(!isOpen), "aria-expanded": isOpen, "aria-haspopup": "listbox", children: [value, _jsx(ChevronIcon, { "$isOpen": isOpen, "aria-hidden": "true" })] }), isOpen && (_jsx(Dropdown, { "$isOpen": isOpen, role: "listbox", children: contentTypes.map((type) => (_jsxs(DropdownItem, { "$isSelected": value === type, onClick: () => {
                        onChange(type);
                        setIsOpen(false);
                    }, role: "option", "aria-selected": value === type, children: [type, value === type && _jsx(CheckIcon, { "aria-hidden": "true" })] }, type))) }))] }));
};
