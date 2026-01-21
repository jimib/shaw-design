import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight, Plus, FileText, Book, Archive, Map, Newspaper, GraduationCap, FileBarChart, BookOpen, } from "lucide-react";
import { Table } from "./Table";
import { Button } from "./Button";
import { Select } from "./Select";
const TAG_COLORS = [
    { value: "none", label: "None", color: "transparent" },
    { value: "red", label: "Red", color: "#FF3B30" },
    { value: "orange", label: "Orange", color: "#FF9500" },
    { value: "yellow", label: "Yellow", color: "#FFCC00" },
    { value: "green", label: "Green", color: "#34C759" },
    { value: "blue", label: "Blue", color: "#007AFF" },
    { value: "purple", label: "Purple", color: "#AF52DE" },
    { value: "gray", label: "Gray", color: "#8E8E93" },
];
const typeIcons = {
    Newspaper: Newspaper,
    "Archival Document": Archive,
    Report: FileBarChart,
    "Map and Plan": Map,
    Magazine: BookOpen,
    Book: Book,
    "Academic Essay": GraduationCap,
};
const PAGE_SIZE_OPTIONS = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "50", label: "50" },
];
const TableContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const ResultsCount = styled.p `
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  color: hsl(var(--muted-foreground));
  margin: 0;
`;
const PaginationContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
const PaginationInfo = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  color: hsl(var(--muted-foreground));
`;
const PaginationControls = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
`;
const PageButton = styled(Button) `
  min-width: 32px;
  height: 32px;
  padding: 0;
`;
const Ellipsis = styled.span `
  padding: 0 8px;
  color: hsl(var(--muted-foreground));
`;
const EmptyState = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 16px;
  text-align: center;
`;
const EmptyIcon = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 9999px;
  background: hsl(var(--secondary));
  margin-bottom: 16px;

  svg {
    width: 24px;
    height: 24px;
    color: hsl(var(--muted-foreground));
  }
`;
const EmptyTitle = styled.h3 `
  font-size: ${({ theme }) => theme.typography.textStyles.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: hsl(var(--foreground));
  margin: 0 0 4px 0;
`;
const EmptyDescription = styled.p `
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  color: hsl(var(--muted-foreground));
  margin: 0;
`;
const ThumbnailCell = styled.div `
  width: 48px;
  height: 48px;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--muted));

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const TypeBadge = styled.span `
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 9999px;
  background: hsl(var(--secondary));
  padding: 4px 10px;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: hsl(var(--secondary-foreground));

  svg {
    width: 12px;
    height: 12px;
  }
`;
const TagButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 0.375rem;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background: hsl(var(--muted));
  }

  svg {
    width: 16px;
    height: 16px;
    ${({ $color }) => $color === "transparent"
    ? `color: hsl(var(--muted-foreground) / 0.4);`
    : `color: ${$color}; fill: ${$color};`}
  }
`;
export const ContentTable = ({ data, search = "", typeFilter = "All Types", onRowClick, className, style, }) => {
    const [sortKey, setSortKey] = useState(null);
    const [sortDirection, setSortDirection] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [itemTags, setItemTags] = useState({});
    const handleSort = (key) => {
        if (sortKey === key) {
            if (sortDirection === "asc") {
                setSortDirection("desc");
            }
            else if (sortDirection === "desc") {
                setSortKey(null);
                setSortDirection(null);
            }
            else {
                setSortDirection("asc");
            }
        }
        else {
            setSortKey(key);
            setSortDirection("asc");
        }
    };
    const filteredAndSortedData = useMemo(() => {
        let result = data.filter((item) => {
            const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
            const matchesType = typeFilter === "All Types" || item.type === typeFilter;
            return matchesSearch && matchesType;
        });
        if (sortKey && sortDirection) {
            result = [...result].sort((a, b) => {
                const aValue = a[sortKey] || "";
                const bValue = b[sortKey] || "";
                if (sortDirection === "asc") {
                    return String(aValue).localeCompare(String(bValue));
                }
                return String(bValue).localeCompare(String(aValue));
            });
        }
        return result;
    }, [data, search, typeFilter, sortKey, sortDirection]);
    useMemo(() => {
        setCurrentPage(1);
    }, [search, typeFilter]);
    const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = filteredAndSortedData.slice(startIndex, endIndex);
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    const handleItemsPerPageChange = (value) => {
        setItemsPerPage(Number(value));
        setCurrentPage(1);
    };
    const columns = [
        {
            key: "thumbnail",
            label: "Preview",
            width: "80px",
            render: (_, item) => item.thumbnail ? (_jsx(ThumbnailCell, { children: _jsx("img", { src: item.thumbnail, alt: item.title }) })) : (_jsx(ThumbnailCell, {})),
        },
        {
            key: "title",
            label: "Title",
            sortable: true,
            render: (_, item) => (_jsx("span", { style: { fontWeight: 500 }, children: item.title })),
        },
        {
            key: "type",
            label: "Type",
            sortable: true,
            render: (_, item) => {
                const TypeIcon = typeIcons[item.type] || FileText;
                return (_jsxs(TypeBadge, { children: [_jsx(TypeIcon, {}), item.type] }));
            },
        },
        {
            key: "mediaType",
            label: "Media Type",
            sortable: true,
            render: (value) => _jsx("span", { style: { color: "hsl(var(--muted-foreground))" }, children: value }),
        },
        {
            key: "issue",
            label: "Issue",
            sortable: true,
            render: (value) => (_jsx("span", { style: { color: "hsl(var(--muted-foreground))" }, children: value || "—" })),
        },
        {
            key: "date",
            label: "Date",
            sortable: true,
            render: (value) => (_jsx("span", { style: { color: "hsl(var(--muted-foreground))" }, children: value })),
        },
        {
            key: "origin",
            label: "Origin",
            sortable: true,
            render: (value) => (_jsx("span", { style: { color: "hsl(var(--muted-foreground))" }, children: value })),
        },
    ];
    if (filteredAndSortedData.length === 0) {
        return (_jsx(TableContainer, { className: className, style: style, children: _jsxs(EmptyState, { children: [_jsx(EmptyIcon, { children: _jsx(Plus, {}) }), _jsx(EmptyTitle, { children: "No items found" }), _jsx(EmptyDescription, { children: "Try adjusting your search or filter criteria" })] }) }));
    }
    return (_jsxs(TableContainer, { className: className, style: style, children: [_jsxs(ResultsCount, { children: [filteredAndSortedData.length, " ", filteredAndSortedData.length === 1 ? "item" : "items", typeFilter !== "All Types" && ` in ${typeFilter}`] }), _jsx(Table, { columns: columns, data: paginatedData, sortKey: sortKey, sortDirection: sortDirection, onSort: handleSort, onRowClick: onRowClick }), filteredAndSortedData.length > 0 && (_jsxs(PaginationContainer, { children: [_jsxs(PaginationInfo, { children: [_jsx("span", { children: "Show" }), _jsx(Select, { options: PAGE_SIZE_OPTIONS, value: String(itemsPerPage), onChange: (e) => handleItemsPerPageChange(e.target.value) }), _jsx("span", { children: "per page" })] }), _jsxs(PaginationControls, { children: [_jsxs("span", { style: { fontSize: "14px", color: "hsl(var(--muted-foreground))" }, children: [startIndex + 1, "\u2013", Math.min(endIndex, filteredAndSortedData.length), " of", " ", filteredAndSortedData.length] }), _jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [_jsx(PageButton, { variant: "outline", size: "sm", icon: ChevronLeft, iconPosition: "left", onClick: () => handlePageChange(currentPage - 1), disabled: currentPage === 1, "aria-label": "Previous page", children: _jsx("span", { style: { width: 0, height: 0, overflow: "hidden" }, children: "Previous" }) }), Array.from({ length: totalPages }, (_, i) => i + 1)
                                        .filter((page) => {
                                        if (totalPages <= 5)
                                            return true;
                                        if (page === 1 || page === totalPages)
                                            return true;
                                        if (Math.abs(page - currentPage) <= 1)
                                            return true;
                                        return false;
                                    })
                                        .map((page, index, array) => {
                                        const showEllipsis = index > 0 && page - array[index - 1] > 1;
                                        return (_jsxs(React.Fragment, { children: [showEllipsis && _jsx(Ellipsis, { children: "..." }), _jsx(PageButton, { variant: currentPage === page ? "primary" : "outline", size: "sm", onClick: () => handlePageChange(page), children: page })] }, page));
                                    }), _jsx(PageButton, { variant: "outline", size: "sm", icon: ChevronRight, iconPosition: "right", onClick: () => handlePageChange(currentPage + 1), disabled: currentPage === totalPages, "aria-label": "Next page", children: _jsx("span", { style: { width: 0, height: 0, overflow: "hidden" }, children: "Next" }) })] })] })] }))] }));
};
