import React from 'react';

export const HeaderLaptopIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <svg
      viewBox="0 0 100 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="laptopBlueScreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="laptopBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      {/* Sparkle yellow rays above screen */}
      <line x1="28" y1="12" x2="22" y2="20" stroke="#facc15" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="48" y1="6" x2="48" y2="16" stroke="#facc15" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="68" y1="12" x2="74" y2="20" stroke="#facc15" strokeWidth="3.5" strokeLinecap="round" />

      {/* Laptop outer screen housing (slightly angled/tilted) */}
      <rect x="18" y="24" width="60" height="42" rx="6" fill="url(#laptopBodyGrad)" transform="rotate(-3 48 45)" />

      {/* Laptop blue screen */}
      <rect x="22" y="27" width="52" height="34" rx="4" fill="url(#laptopBlueScreen)" transform="rotate(-3 48 45)" />

      {/* "IA" Text on screen */}
      <text
        x="36"
        y="52"
        fill="#ffffff"
        fontSize="18"
        fontWeight="900"
        fontFamily="sans-serif"
        letterSpacing="0.5"
        transform="rotate(-3 48 45)"
      >
        IA
      </text>

      {/* Laptop base keyboard */}
      <path
        d="M10 68 L86 64 L92 74 C92 76 90 77 87 77 L9 79 C6 79 5 77 6 75 Z"
        fill="#1e293b"
      />
      {/* Front edge highlight */}
      <path
        d="M6 75 L89 71 L92 74 L9 79 Z"
        fill="#334155"
      />
    </svg>
  );
};
