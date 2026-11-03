import React from 'react';

export const HeaderIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 340 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Soft background glow */}
        <radialGradient id="headerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#dbeafe" stopOpacity="0" />
        </radialGradient>

        {/* Robot head/body gradient */}
        <linearGradient id="robotWhite" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>

        {/* Robot ear/details blue */}
        <linearGradient id="robotBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>

        {/* Visor glass gradient */}
        <linearGradient id="visorScreen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>

        {/* Glowing bulb gradient */}
        <radialGradient id="bulbGlow" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#eab308" />
        </radialGradient>

        {/* Laptop gradient */}
        <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        {/* Book blue */}
        <linearGradient id="bookBlue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        {/* Book yellow */}
        <linearGradient id="bookYellow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>

        {/* Shadow filter */}
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.12" />
        </filter>
        <filter id="lightGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background ambient decorative clouds */}
      <circle cx="210" cy="90" r="75" fill="url(#headerGlow)" />
      <path
        d="M170 145 C155 145 145 135 145 120 C145 108 153 98 165 95 C167 78 182 65 200 65 C218 65 233 77 236 94 C246 95 254 104 254 115 C254 126 245 135 235 135 Z"
        fill="#ffffff"
        fillOpacity="0.65"
      />

      {/* --- ELEMENT 1: STACKED BOOKS & LIGHTBULB (Left of robot) --- */}
      <g filter="url(#softShadow)">
        {/* Desk Base Shadow */}
        <ellipse cx="140" cy="155" rx="120" ry="8" fill="#cbd5e1" fillOpacity="0.5" />

        {/* Bottom Book (Yellow) */}
        <rect x="52" y="140" width="76" height="13" rx="3" fill="url(#bookYellow)" />
        <rect x="55" y="142" width="70" height="9" rx="1.5" fill="#fef3c7" />
        <rect x="52" y="140" width="8" height="13" rx="2" fill="#d97706" />

        {/* Top Book (Blue) */}
        <rect x="56" y="125" width="70" height="14" rx="3" fill="url(#bookBlue)" />
        <rect x="59" y="127" width="64" height="10" rx="1.5" fill="#f8fafc" />
        <rect x="56" y="125" width="7" height="14" rx="2" fill="#1d4ed8" />

        {/* Lightbulb glowing stand */}
        <rect x="87" y="116" width="8" height="9" rx="2" fill="#94a3b8" />
        <rect x="88.5" y="121" width="5" height="4" rx="1" fill="#cbd5e1" />

        {/* Lightbulb Glow Backdrop */}
        <circle cx="91" cy="98" r="24" fill="#fef08a" fillOpacity="0.45" filter="url(#lightGlow)" />

        {/* Lightbulb Glass */}
        <path
          d="M83 108 C80 102 78 96 79 90 C80 82 86 76 94 76 C102 76 108 82 109 90 C110 96 108 102 105 108 Z"
          fill="url(#bulbGlow)"
        />

        {/* Bulb Filament */}
        <path
          d="M87 95 C87 90 95 90 95 95 C95 99 91 99 91 106"
          stroke="#b45309"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bulb Rays */}
        <line x1="91" y1="66" x2="91" y2="71" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="72" y1="76" x2="76" y2="80" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="110" y1="76" x2="106" y2="80" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="65" y1="92" x2="70" y2="92" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="112" y1="92" x2="117" y2="92" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* --- ELEMENT 2: PENCIL CUP (Far right of desk) --- */}
      <g filter="url(#softShadow)">
        {/* Yellow Cup */}
        <rect x="272" y="122" width="22" height="30" rx="4" fill="#f59e0b" />
        <rect x="274" y="123" width="18" height="3" rx="1.5" fill="#fde68a" />

        {/* Pencils */}
        {/* Pencil 1 (Blue) */}
        <path d="M276 122 L278 105 L282 105 L280 122 Z" fill="#2563eb" />
        <path d="M278 105 L280 99 L282 105 Z" fill="#fed7aa" />
        <path d="M279.5 101 L280.5 101 L280 99 Z" fill="#1e293b" />

        {/* Pencil 2 (Cyan) */}
        <path d="M284 122 L287 101 L290 101 L287 122 Z" fill="#06b6d4" />
        <path d="M287 101 L288.5 95 L290 101 Z" fill="#fed7aa" />

        {/* Pencil 3 (Amber/Orange) */}
        <path d="M280 122 L282 110 L285 110 L283 122 Z" fill="#ea580c" />
      </g>

      {/* --- ELEMENT 3: THE FRIENDLY AI ROBOT --- */}
      <g filter="url(#softShadow)">
        {/* Antenna */}
        <rect x="208" y="24" width="4" height="15" rx="2" fill="#94a3b8" />
        <circle cx="210" cy="22" r="6" fill="#38bdf8" />
        <circle cx="210" cy="22" r="3.5" fill="#f0fdf4" />

        {/* Body / Torso */}
        <path
          d="M185 118 C185 110 192 104 201 104 L219 104 C228 104 235 110 235 118 L240 148 C240 152 236 156 232 156 L188 156 C184 156 180 152 180 148 Z"
          fill="url(#robotWhite)"
        />
        {/* Torso accent badge */}
        <rect x="202" y="112" width="16" height="8" rx="4" fill="url(#robotBlue)" />
        <circle cx="210" cy="116" r="2" fill="#ffffff" />

        {/* Head Base & Shape */}
        <rect x="176" y="36" width="68" height="60" rx="24" fill="url(#robotWhite)" />

        {/* Blue Earphones / Headphone side pads */}
        {/* Left Ear */}
        <rect x="168" y="52" width="10" height="28" rx="5" fill="url(#robotBlue)" />
        <rect x="171" y="56" width="4" height="20" rx="2" fill="#93c5fd" />
        {/* Right Ear */}
        <rect x="242" y="52" width="10" height="28" rx="5" fill="url(#robotBlue)" />
        <rect x="245" y="56" width="4" height="20" rx="2" fill="#93c5fd" />

        {/* Visor Screen Face */}
        <rect x="182" y="44" width="56" height="42" rx="16" fill="url(#visorScreen)" />

        {/* Cute Smiling Eyes in Cyan on Visor (^ ^) */}
        {/* Left Eye */}
        <path
          d="M192 64 C192 58 198 56 202 61"
          stroke="#38bdf8"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Right Eye */}
        <path
          d="M218 61 C222 56 228 58 228 64"
          stroke="#38bdf8"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Cheerful small rosy cheeks */}
        <circle cx="190" cy="74" r="3" fill="#38bdf8" fillOpacity="0.4" />
        <circle cx="230" cy="74" r="3" fill="#38bdf8" fillOpacity="0.4" />

        {/* Small subtle cute mouth */}
        <path
          d="M207 72 C209 75 211 75 213 72"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* --- ELEMENT 4: LAPTOP IN FRONT OF ROBOT --- */}
      <g filter="url(#softShadow)">
        {/* Laptop Screen (angled view) */}
        <path
          d="M165 110 L215 98 L215 138 L165 146 Z"
          fill="url(#laptopGrad)"
        />
        {/* Laptop Screen Border / Bezel */}
        <path
          d="M167 112 L213 101 L213 136 L167 144 Z"
          fill="#1e293b"
        />
        {/* Glowing Screen Content */}
        <path
          d="M169 114 L211 103 L211 134 L169 142 Z"
          fill="#0284c7"
        />
        <text
          x="185"
          y="128"
          fill="#ffffff"
          fontSize="9"
          fontWeight="bold"
          fontFamily="sans-serif"
          transform="rotate(2 185 128)"
        >
          IA
        </text>

        {/* Laptop Keyboard Base */}
        <path
          d="M152 146 L218 138 L238 152 L172 156 Z"
          fill="#334155"
        />
        <path
          d="M158 147 L215 140 L233 151 L175 154 Z"
          fill="#1e293b"
        />

        {/* Robot Hands on Keyboard */}
        <ellipse cx="182" cy="148" rx="6" ry="4" fill="url(#robotWhite)" />
        <ellipse cx="218" cy="145" rx="6" ry="4" fill="url(#robotWhite)" />
      </g>

      {/* Floating sparkles */}
      <path
        d="M255 35 L258 40 L263 43 L258 46 L255 51 L252 46 L247 43 L252 40 Z"
        fill="#facc15"
      />
      <circle cx="152" cy="72" r="2.5" fill="#38bdf8" />
      <circle cx="268" cy="78" r="2" fill="#fbbf24" />
      <circle cx="160" cy="40" r="1.5" fill="#93c5fd" />
    </svg>
  );
};
