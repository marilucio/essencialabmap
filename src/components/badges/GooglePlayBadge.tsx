import React from 'react';

interface BadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="#2196f3" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
    <path fill="#4caf50" d="M47.4 45.3l42.5 43.4 154.6 158.7 60.1-60.1L47.4 45.3z" />
    <path fill="#ffc107" d="M47.4 45.3l-34 34.6c-11.5 11.7-11.5 30.7 0 42.4l34 34.6 42.5-43.4-42.5-68.2z" />
    <path fill="#f44336" d="M47.4 466.7l257.5-248.4 60.1 60.1-280.8 161.2-36.8-26.1z" />
  </svg>
);

export const GooglePlayBadge: React.FC<BadgeProps> = ({ className, ...props }) => {
  return (
    <button
      className={`group flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white border border-gray-700/50 rounded-xl px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 ${className}`}
      {...props}
    >
      <GooglePlayIcon className="w-7 h-7 sm:w-8 sm:h-8 mb-0.5" />
      <div className="text-left flex flex-col items-start justify-center -space-y-1">
        <span className="text-[10px] sm:text-xs font-medium opacity-90 tracking-wide">Disponível no</span>
        <span className="text-lg sm:text-xl font-bold tracking-tight font-sans">Google Play</span>
      </div>
    </button>
  );
};
