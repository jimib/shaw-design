"use client";

import { ReactNode } from "react";

interface ProgressProps {
  // Progress state
  progress: number;
  progressText?: string;

  // Customization
  showSpinner?: boolean;
  showText?: boolean;
  showBar?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "warning" | "error";

  // Content
  icon?: ReactNode;
  children?: ReactNode;

  // Styling
  className?: string;
}

export function Progress({
  progress,
  progressText = "Processing...",
  showSpinner = true,
  showText = true,
  showBar = true,
  size = "md",
  variant = "default",
  icon,
  children,
  className = "",
}: ProgressProps) {
  const sizeClasses = {
    sm: "h-1 text-xs",
    md: "h-2 text-sm",
    lg: "h-3 text-base",
  };

  const variantClasses = {
    default: "bg-blue-600",
    success: "bg-green-600",
    warning: "bg-yellow-600",
    error: "bg-red-600",
  };

  const spinnerSizes = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {showSpinner && (
        <div className="flex justify-center">
          <div
            className={`${spinnerSizes[size]} animate-spin rounded-full border-2 border-gray-200 border-b-blue-600 mx-auto`}
          ></div>
        </div>
      )}

      {icon && <div className="mx-auto">{icon}</div>}

      {/* {progressText && (
        <p
          className={`text-blue-600 font-medium text-center ${textSizes[size]}`}
        >
          {progressText}
        </p>
      )} */}

      {showBar && (
        <div className="w-full bg-gray-200 rounded-full">
          <div
            className={`${variantClasses[variant]} ${sizeClasses[size]} rounded-full transition-all duration-300`}
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          ></div>
        </div>
      )}
      {showText && (
        <>
          <p className={`text-gray-500 text-center ${textSizes[size]}`}>
            {progress.toFixed(1)}%
          </p>
        </>
      )}

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
