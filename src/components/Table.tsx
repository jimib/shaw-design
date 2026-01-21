import React from "react";
import styled from "styled-components";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

export type SortDirection = "asc" | "desc" | null;

export interface TableColumn<T = any> {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
  width?: string;
}

interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  sortKey?: string | null;
  sortDirection?: SortDirection;
  onSort?: (key: string) => void;
  onRowClick?: (row: T) => void;
  className?: string;
  style?: React.CSSProperties;
}

const TableWrapper = styled.div`
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--card));
  overflow: hidden;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.typography.textStyles.body.fontSize};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(", ")};
`;

const TableHeader = styled.thead`
  background: transparent;
`;

const TableHeaderRow = styled.tr`
  border-bottom: 1px solid hsl(var(--border));

  &:hover {
    background: transparent;
  }
`;

const TableHeaderCell = styled.th<{ $sortable: boolean; $width?: string }>`
  height: 48px;
  padding: 0 16px;
  text-align: left;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: hsl(var(--muted-foreground));
  vertical-align: middle;
  width: ${({ $width }) => $width || "auto"};

  ${({ $sortable }) =>
    $sortable &&
    `
    cursor: pointer;
    user-select: none;
    
    &:hover {
      color: hsl(var(--foreground));
    }
  `}
`;

const SortButton = styled.button`
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

const TableBody = styled.tbody``;

const TableRow = styled.tr<{ $clickable: boolean }>`
  border-bottom: 1px solid hsl(var(--border));
  transition: background-color 0.15s ease-in-out;
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ $clickable }) =>
      $clickable ? "hsl(var(--muted) / 0.5)" : "transparent"};
  }
`;

const TableCell = styled.td`
  padding: 16px;
  vertical-align: middle;
  color: hsl(var(--foreground));
`;

const getSortIcon = (
  sortKey: string | null | undefined,
  columnKey: string,
  sortDirection: SortDirection
) => {
  if (sortKey !== columnKey) {
    return <ArrowUpDown className="text-muted-foreground/50" />;
  }
  if (sortDirection === "asc") {
    return <ArrowUp className="text-primary" />;
  }
  if (sortDirection === "desc") {
    return <ArrowDown className="text-primary" />;
  }
  return <ArrowUpDown className="text-muted-foreground/50" />;
};

export function Table<T = any>({
  columns,
  data,
  sortKey,
  sortDirection = null,
  onSort,
  onRowClick,
  className,
  style,
}: TableProps<T>) {
  return (
    <TableWrapper className={className} style={style}>
      <StyledTable>
        <TableHeader>
          <TableHeaderRow>
            {columns.map((column) => (
              <TableHeaderCell
                key={column.key}
                $sortable={!!column.sortable}
                $width={column.width}
              >
                {column.sortable && onSort ? (
                  <SortButton
                    onClick={() => onSort(column.key)}
                    type="button"
                  >
                    {column.label}
                    {getSortIcon(sortKey, column.key, sortDirection)}
                  </SortButton>
                ) : (
                  column.label
                )}
              </TableHeaderCell>
            ))}
          </TableHeaderRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              $clickable={!!onRowClick}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {column.render
                    ? column.render((row as any)[column.key], row)
                    : String((row as any)[column.key] || "")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableWrapper>
  );
}
