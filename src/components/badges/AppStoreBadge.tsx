import React from "react";
import { Apple } from "lucide-react";

interface BadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const AppStoreBadge: React.FC<BadgeProps> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={`group flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white border border-gray-700/50 rounded-xl px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 ${className}`}
      {...props}
    >
      <Apple className="w-7 h-7 sm:w-8 sm:h-8 fill-current mb-0.5" />
      <div className="text-left flex flex-col items-start justify-center -space-y-1">
        <span className="text-[10px] sm:text-xs font-medium opacity-90 tracking-wide">
          Baixar na
        </span>
        <span className="text-lg sm:text-xl font-bold tracking-tight font-sans">
          App Store
        </span>
      </div>
    </button>
  );
};
