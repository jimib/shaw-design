import React, { useState, useMemo } from "react";
import styled from "styled-components";
import {
  ChevronLeft,
  ChevronRight,
  Circle,
  X,
  Plus,
  FileText,
  Book,
  Archive,
  Map,
  Newspaper,
  GraduationCap,
  FileBarChart,
  BookOpen,
  LucideIcon,
} from "lucide-react";
import { Table, TableColumn, SortDirection } from "./Table";
import { Button } from "./Button";
import { Select } from "./Select";

export interface ContentItem {
  id: string;
  title: string;
  type: string;
  mediaType: string;
  thumbnail?: string;
  issue?: string;
  date: string;
  origin: string;
}

type TagColor = "none" | "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "gray";

const TAG_COLORS: { value: TagColor; label: string; color: string }[] = [
  { value: "none", label: "None", color: "transparent" },
  { value: "red", label: "Red", color: "#FF3B30" },
  { value: "orange", label: "Orange", color: "#FF9500" },
  { value: "yellow", label: "Yellow", color: "#FFCC00" },
  { value: "green", label: "Green", color: "#34C759" },
  { value: "blue", label: "Blue", color: "#007AFF" },
  { value: "purple", label: "Purple", color: "#AF52DE" },
  { value: "gray", label: "Gray", color: "#8E8E93" },
];

const typeIcons: Record<string, LucideIcon> = {
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

interface ContentTableProps {
  data: ContentItem[];
  search?: string;
  typeFilter?: string;
  onRowClick?: (item: ContentItem) => void;
  className?: string;
  style?: React.CSSProperties;
}

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ResultsCount = styled.p`
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  color: hsl(var(--muted-foreground));
  margin: 0;
`;

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const PaginationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  color: hsl(var(--muted-foreground));
`;

const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PageButton = styled(Button)`
  min-width: 32px;
  height: 32px;
  padding: 0;
`;

const Ellipsis = styled.span`
  padding: 0 8px;
  color: hsl(var(--muted-foreground));
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 16px;
  text-align: center;
`;

const EmptyIcon = styled.div`
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

const EmptyTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.textStyles.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: hsl(var(--foreground));
  margin: 0 0 4px 0;
`;

const EmptyDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  color: hsl(var(--muted-foreground));
  margin: 0;
`;

const ThumbnailCell = styled.div`
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

const TypeBadge = styled.span`
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

const TagButton = styled.button<{ $color: string }>`
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
    ${({ $color }) =>
      $color === "transparent"
        ? `color: hsl(var(--muted-foreground) / 0.4);`
        : `color: ${$color}; fill: ${$color};`}
  }
`;

export const ContentTable: React.FC<ContentTableProps> = ({
  data,
  search = "",
  typeFilter = "All Types",
  onRowClick,
  className,
  style,
}) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [itemTags, setItemTags] = useState<Record<string, TagColor>>({});

  const handleSort = (key: string) => {
    if (sortKey === key) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortKey(null);
        setSortDirection(null);
      } else {
        setSortDirection("asc");
      }
    } else {
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
        const aValue = (a as any)[sortKey] || "";
        const bValue = (b as any)[sortKey] || "";

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

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  const columns: TableColumn<ContentItem>[] = [
    {
      key: "thumbnail",
      label: "Preview",
      width: "80px",
      render: (_, item) =>
        item.thumbnail ? (
          <ThumbnailCell>
            <img src={item.thumbnail} alt={item.title} />
          </ThumbnailCell>
        ) : (
          <ThumbnailCell />
        ),
    },
    {
      key: "title",
      label: "Title",
      sortable: true,
      render: (_, item) => (
        <span style={{ fontWeight: 500 }}>{item.title}</span>
      ),
    },
    {
      key: "type",
      label: "Type",
      sortable: true,
      render: (_, item) => {
        const TypeIcon = typeIcons[item.type] || FileText;
        return (
          <TypeBadge>
            <TypeIcon />
            {item.type}
          </TypeBadge>
        );
      },
    },
    {
      key: "mediaType",
      label: "Media Type",
      sortable: true,
      render: (value) => <span style={{ color: "hsl(var(--muted-foreground))" }}>{value}</span>,
    },
    {
      key: "issue",
      label: "Issue",
      sortable: true,
      render: (value) => (
        <span style={{ color: "hsl(var(--muted-foreground))" }}>
          {value || "—"}
        </span>
      ),
    },
    {
      key: "date",
      label: "Date",
      sortable: true,
      render: (value) => (
        <span style={{ color: "hsl(var(--muted-foreground))" }}>{value}</span>
      ),
    },
    {
      key: "origin",
      label: "Origin",
      sortable: true,
      render: (value) => (
        <span style={{ color: "hsl(var(--muted-foreground))" }}>{value}</span>
      ),
    },
  ];

  if (filteredAndSortedData.length === 0) {
    return (
      <TableContainer className={className} style={style}>
        <EmptyState>
          <EmptyIcon>
            <Plus />
          </EmptyIcon>
          <EmptyTitle>No items found</EmptyTitle>
          <EmptyDescription>
            Try adjusting your search or filter criteria
          </EmptyDescription>
        </EmptyState>
      </TableContainer>
    );
  }

  return (
    <TableContainer className={className} style={style}>
      <ResultsCount>
        {filteredAndSortedData.length}{" "}
        {filteredAndSortedData.length === 1 ? "item" : "items"}
        {typeFilter !== "All Types" && ` in ${typeFilter}`}
      </ResultsCount>

      <Table
        columns={columns}
        data={paginatedData}
        sortKey={sortKey}
        sortDirection={sortDirection}
        onSort={handleSort}
        onRowClick={onRowClick}
      />

      {filteredAndSortedData.length > 0 && (
        <PaginationContainer>
          <PaginationInfo>
            <span>Show</span>
            <Select
              options={PAGE_SIZE_OPTIONS}
              value={String(itemsPerPage)}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handleItemsPerPageChange(e.target.value)
              }
            />
            <span>per page</span>
          </PaginationInfo>

          <PaginationControls>
            <span style={{ fontSize: "14px", color: "hsl(var(--muted-foreground))" }}>
              {startIndex + 1}–{Math.min(endIndex, filteredAndSortedData.length)} of{" "}
              {filteredAndSortedData.length}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <PageButton
                variant="outline"
                size="sm"
                icon={ChevronLeft}
                iconPosition="left"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <span style={{ width: 0, height: 0, overflow: "hidden" }}>Previous</span>
              </PageButton>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => {
                  if (totalPages <= 5) return true;
                  if (page === 1 || page === totalPages) return true;
                  if (Math.abs(page - currentPage) <= 1) return true;
                  return false;
                })
                .map((page, index, array) => {
                  const showEllipsis = index > 0 && page - array[index - 1] > 1;
                  return (
                    <React.Fragment key={page}>
                      {showEllipsis && <Ellipsis>...</Ellipsis>}
                      <PageButton
                        variant={currentPage === page ? "primary" : "outline"}
                        size="sm"
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </PageButton>
                    </React.Fragment>
                  );
                })}
              <PageButton
                variant="outline"
                size="sm"
                icon={ChevronRight}
                iconPosition="right"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                <span style={{ width: 0, height: 0, overflow: "hidden" }}>Next</span>
              </PageButton>
            </div>
          </PaginationControls>
        </PaginationContainer>
      )}
    </TableContainer>
  );
};
