# Select Component Usage in FilterBar - Recommendations

## Issue Analysis

The developer attempted to use a compound Select component pattern (similar to Radix UI or shadcn/ui) with components like `SelectContent`, `SelectItem`, `SelectTrigger`, and `SelectValue`. However, the Shaw Design System's Select component is a **simple, self-contained component** that uses a different API pattern.

## Current Select Component API

The Shaw Design System Select component expects:

```typescript
interface SelectProps {
  options: SelectOption[]; // Array of {value, label, disabled?}
  placeholder?: string;
  error?: boolean;
  success?: boolean;
  warning?: boolean;
  // ... other HTML select attributes
}

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}
```

## Recommended Solution: Corrected FilterBar Implementation

Here's the corrected FilterBar component using the proper Select component API:

```typescript
"use client";

import React, { useState } from "react";
import { Card, CardContent, Button, Select, Label } from "@jimib/shaw-design";
import { BaseFilter, SortOption, FilterState } from "../types/filter.types";

interface FilterBarProps {
  filters: BaseFilter[];
  sortOptions: SortOption[];
  filterState: FilterState;
  onFilterChange: (filterId: string, value: any) => void;
  onSortChange: (sortOption: SortOption) => void;
  onClearFilters: () => void;
  className?: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  sortOptions,
  filterState,
  onFilterChange,
  onSortChange,
  onClearFilters,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasActiveFilters = Object.values(filterState.filters).some(
    (value) =>
      value !== null && value !== undefined && value !== "" && value !== "all"
  );

  const renderFilter = (filter: BaseFilter) => {
    const currentValue = filterState.filters[filter.id] || "";

    switch (filter.type) {
      case "select":
        return (
          <div key={filter.id} className="flex flex-col space-y-1">
            <Label htmlFor={filter.id} className="text-sm font-medium">
              {filter.label}
            </Label>
            <Select
              id={filter.id}
              value={currentValue}
              onChange={(e) => onFilterChange(filter.id, e.target.value)}
              options={filter.options || []}
              placeholder={filter.placeholder || `Select ${filter.label}`}
              className="w-full"
            />
          </div>
        );

      case "multiselect":
        // For future implementation - consider using Checkbox components
        return (
          <div key={filter.id} className="flex flex-col space-y-2">
            <Label className="text-sm font-medium">{filter.label}</Label>
            <div className="space-y-2">
              {filter.options?.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${filter.id}-${option.value}`}
                    checked={currentValue.includes(option.value)}
                    onChange={(checked) => {
                      const newValue = checked
                        ? [...currentValue, option.value]
                        : currentValue.filter(
                            (v: string) => v !== option.value
                          );
                      onFilterChange(filter.id, newValue);
                    }}
                  />
                  <Label
                    htmlFor={`${filter.id}-${option.value}`}
                    className="text-sm"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );

      case "text":
        return (
          <div key={filter.id} className="flex flex-col space-y-1">
            <Label htmlFor={filter.id} className="text-sm font-medium">
              {filter.label}
            </Label>
            <Input
              id={filter.id}
              type="text"
              value={currentValue}
              onChange={(e) => onFilterChange(filter.id, e.target.value)}
              placeholder={filter.placeholder || `Enter ${filter.label}`}
              className="w-full"
            />
          </div>
        );

      case "date":
        return (
          <div key={filter.id} className="flex flex-col space-y-1">
            <Label htmlFor={filter.id} className="text-sm font-medium">
              {filter.label}
            </Label>
            <Input
              id={filter.id}
              type="date"
              value={currentValue}
              onChange={(e) => onFilterChange(filter.id, e.target.value)}
              className="w-full"
            />
          </div>
        );

      case "range":
        return (
          <div key={filter.id} className="flex flex-col space-y-2">
            <Label className="text-sm font-medium">{filter.label}</Label>
            <div className="flex items-center space-x-2">
              <Input
                id={`${filter.id}-min`}
                type="number"
                placeholder="Min"
                value={currentValue?.min || ""}
                onChange={(e) =>
                  onFilterChange(filter.id, {
                    ...currentValue,
                    min: e.target.value ? Number(e.target.value) : undefined,
                  })
                }
                className="flex-1"
              />
              <span className="text-gray-500">to</span>
              <Input
                id={`${filter.id}-max`}
                type="number"
                placeholder="Max"
                value={currentValue?.max || ""}
                onChange={(e) =>
                  onFilterChange(filter.id, {
                    ...currentValue,
                    max: e.target.value ? Number(e.target.value) : undefined,
                  })
                }
                className="flex-1"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className={`mb-4 ${className}`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Filters & Sorting</h3>
          <div className="flex items-center space-x-2">
            {hasActiveFilters && (
              <Button onClick={onClearFilters} variant="secondary" size="sm">
                Clear Filters
              </Button>
            )}
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="secondary"
              size="sm"
            >
              {isExpanded ? "Hide" : "Show"} Filters
            </Button>
          </div>
        </div>

        {/* Sort Options - Always visible */}
        <div className="mb-4">
          <Label htmlFor="sort-select" className="text-sm font-medium">
            Sort By
          </Label>
          <Select
            id="sort-select"
            value={`${filterState.sortBy.field}-${filterState.sortBy.direction}`}
            onChange={(e) => {
              const [field, direction] = e.target.value.split("-") as [
                string,
                "asc" | "desc"
              ];
              const sortOption = sortOptions.find(
                (option) =>
                  option.field === field && option.direction === direction
              );
              if (sortOption) {
                onSortChange(sortOption);
              }
            }}
            options={sortOptions.map((option) => ({
              value: `${option.field}-${option.direction}`,
              label: option.label,
            }))}
            placeholder="Select sorting option"
            className="w-full"
          />
        </div>

        {/* Filters - Expandable */}
        {isExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filters.map(renderFilter)}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FilterBar;
```

## Additional Component Recommendations

### 1. Enhanced Filter Types

Consider extending your filter types to support more use cases:

```typescript
interface BaseFilter {
  id: string;
  label: string;
  type: "select" | "multiselect" | "text" | "date" | "range" | "boolean";
  placeholder?: string;
  options?: FilterOption[];
  validation?: {
    required?: boolean;
    min?: number;
    max?: number;
    pattern?: string;
  };
}

interface FilterOption {
  value: string | number;
  label: string;
  disabled?: boolean;
  group?: string; // For grouped options
}
```

### 2. Filter Grouping Component

For complex filter scenarios, consider creating a FilterGroup component:

```typescript
interface FilterGroupProps {
  title: string;
  filters: BaseFilter[];
  filterState: FilterState;
  onFilterChange: (filterId: string, value: any) => void;
  collapsible?: boolean;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  filters,
  filterState,
  onFilterChange,
  collapsible = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(!collapsible);

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-md font-medium">{title}</h4>
          {collapsible && (
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="secondary"
              size="sm"
            >
              {isExpanded ? "Hide" : "Show"}
            </Button>
          )}
        </div>

        {isExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filters.map(renderFilter)}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
```

### 3. Filter Presets Component

For common filter combinations:

```typescript
interface FilterPreset {
  id: string;
  label: string;
  filters: Record<string, any>;
}

interface FilterPresetsProps {
  presets: FilterPreset[];
  onApplyPreset: (preset: FilterPreset) => void;
  onSavePreset: (preset: Omit<FilterPreset, "id">) => void;
  currentFilters: FilterState;
}

export const FilterPresets: React.FC<FilterPresetsProps> = ({
  presets,
  onApplyPreset,
  onSavePreset,
  currentFilters,
}) => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <Label className="text-sm font-medium">Presets:</Label>
      {presets.map((preset) => (
        <Button
          key={preset.id}
          onClick={() => onApplyPreset(preset)}
          variant="outline"
          size="sm"
        >
          {preset.label}
        </Button>
      ))}
      <Button
        onClick={() =>
          onSavePreset({
            label: "Custom Preset",
            filters: currentFilters.filters,
          })
        }
        variant="outline"
        size="sm"
      >
        Save Current
      </Button>
    </div>
  );
};
```

### 4. Filter Summary Component

Show active filters in a compact format:

```typescript
interface FilterSummaryProps {
  filterState: FilterState;
  filters: BaseFilter[];
  onRemoveFilter: (filterId: string) => void;
  onClearAll: () => void;
}

export const FilterSummary: React.FC<FilterSummaryProps> = ({
  filterState,
  filters,
  onRemoveFilter,
  onClearAll,
}) => {
  const activeFilters = filters.filter((filter) => {
    const value = filterState.filters[filter.id];
    return (
      value !== null && value !== undefined && value !== "" && value !== "all"
    );
  });

  if (activeFilters.length === 0) return null;

  return (
    <div className="flex items-center space-x-2 mb-4 p-3 bg-gray-50 rounded-lg">
      <span className="text-sm font-medium">Active filters:</span>
      <div className="flex flex-wrap gap-2">
        {activeFilters.map((filter) => (
          <div
            key={filter.id}
            className="flex items-center space-x-1 bg-white px-2 py-1 rounded border"
          >
            <span className="text-sm">
              {filter.label}: {filterState.filters[filter.id]}
            </span>
            <Button
              onClick={() => onRemoveFilter(filter.id)}
              variant="ghost"
              size="sm"
              className="h-4 w-4 p-0"
            >
              ×
            </Button>
          </div>
        ))}
        <Button onClick={onClearAll} variant="ghost" size="sm">
          Clear All
        </Button>
      </div>
    </div>
  );
};
```

## Key Benefits of This Approach

1. **Consistency**: Uses the existing Select component API correctly
2. **Accessibility**: Maintains proper form semantics with labels and IDs
3. **Extensibility**: Easy to add new filter types
4. **Performance**: Native HTML elements are more performant
5. **Maintainability**: Follows established patterns in your design system

## Migration Notes

- Replace all compound Select usage with the simple Select component
- Update event handlers from `onValueChange` to `onChange`
- Convert option arrays to the expected `{value, label}` format
- Use proper HTML form attributes (`id`, `htmlFor`) for accessibility
