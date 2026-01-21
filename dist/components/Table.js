import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
const TableWrapper = styled.div `
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--card));
  overflow: hidden;
`;
const StyledTable = styled.table `
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.typography.textStyles.body.fontSize};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(", ")};
`;
const TableHeader = styled.thead `
  background: transparent;
`;
const TableHeaderRow = styled.tr `
  border-bottom: 1px solid hsl(var(--border));

  &:hover {
    background: transparent;
  }
`;
const TableHeaderCell = styled.th `
  height: 48px;
  padding: 0 16px;
  text-align: left;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: hsl(var(--muted-foreground));
  vertical-align: middle;
  width: ${({ $width }) => $width || "auto"};

  ${({ $sortable }) => $sortable &&
    `
    cursor: pointer;
    user-select: none;
    
    &:hover {
      color: hsl(var(--foreground));
    }
  `}
`;
const SortButton = styled.button `
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: hsl(var(--foreground));
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
const TableBody = styled.tbody ``;
const TableRow = styled.tr `
  border-bottom: 1px solid hsl(var(--border));
  transition: background-color 0.15s ease-in-out;
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ $clickable }) => $clickable ? "hsl(var(--muted) / 0.5)" : "transparent"};
  }
`;
const TableCell = styled.td `
  padding: 16px;
  vertical-align: middle;
  color: hsl(var(--foreground));
`;
const getSortIcon = (sortKey, columnKey, sortDirection) => {
    if (sortKey !== columnKey) {
        return _jsx(ArrowUpDown, { className: "text-muted-foreground/50" });
    }
    if (sortDirection === "asc") {
        return _jsx(ArrowUp, { className: "text-primary" });
    }
    if (sortDirection === "desc") {
        return _jsx(ArrowDown, { className: "text-primary" });
    }
    return _jsx(ArrowUpDown, { className: "text-muted-foreground/50" });
};
export function Table({ columns, data, sortKey, sortDirection = null, onSort, onRowClick, className, style, }) {
    return (_jsx(TableWrapper, { className: className, style: style, children: _jsxs(StyledTable, { children: [_jsx(TableHeader, { children: _jsx(TableHeaderRow, { children: columns.map((column) => (_jsx(TableHeaderCell, { "$sortable": !!column.sortable, "$width": column.width, children: column.sortable && onSort ? (_jsxs(SortButton, { onClick: () => onSort(column.key), type: "button", children: [column.label, getSortIcon(sortKey, column.key, sortDirection)] })) : (column.label) }, column.key))) }) }), _jsx(TableBody, { children: data.map((row, index) => (_jsx(TableRow, { "$clickable": !!onRowClick, onClick: () => onRowClick?.(row), children: columns.map((column) => (_jsx(TableCell, { children: column.render
                                ? column.render(row[column.key], row)
                                : String(row[column.key] || "") }, column.key))) }, index))) })] }) }));
}
