"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: React.ReactNode;
  type: "success" | "error";
  onClose?: () => void;
  duration?: number;
}

export function Toast({ message, type, onClose, duration = 3000 }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!onClose) return;
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for fade out animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const baseClasses =
    "fixed top-4 left-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300";
  const typeClasses =
    type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white";

  return (
    <div
      className={`${baseClasses} ${typeClasses} ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
      }`}
    >
      <div className="flex items-center space-x-2">
        <span>{message}</span>
        {onClose && (
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className="ml-2 text-white hover:text-gray-200 transition-colors"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}
