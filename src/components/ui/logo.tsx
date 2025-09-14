interface KeyLogoProps {
  className?: string;
  size?: number;
}

const KeyLogo = ({ className = "", size = 24 }: KeyLogoProps) => {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="30%" stopColor="#FFA500" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Ornate decorative top */}
      <g fill="url(#goldGradient)" filter="url(#shadow)">
        {/* Central diamond */}
        <path d="M50 15 L60 25 L50 35 L40 25 Z" />

        {/* Four connecting circles */}
        <circle cx="50" cy="10" r="8" />
        <circle cx="65" cy="25" r="8" />
        <circle cx="50" cy="40" r="8" />
        <circle cx="35" cy="25" r="8" />

        {/* Interlocking pattern */}
        <path d="M42 10 L58 10 C60 10 60 12 58 12 L42 12 C40 12 40 10 42 10 Z" />
        <path d="M65 17 L65 33 C65 35 63 35 63 33 L63 17 C63 15 65 15 65 17 Z" />
        <path d="M58 40 L42 40 C40 40 40 38 42 38 L58 38 C60 38 60 40 58 40 Z" />
        <path d="M35 33 L35 17 C35 15 37 15 37 17 L37 33 C37 35 35 35 35 33 Z" />

        {/* Inner connecting lines */}
        <path
          d="M45 20 L55 20 L55 30 L45 30 Z"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1"
        />

        {/* Neck of key */}
        <rect x="47" y="45" width="6" height="8" />
        <rect x="45" y="50" width="10" height="2" />
        <rect x="45" y="55" width="10" height="2" />

        {/* Key shaft */}
        <rect x="47" y="60" width="6" height="45" />

        {/* Key teeth */}
        <rect x="53" y="85" width="8" height="4" />
        <rect x="53" y="95" width="6" height="4" />
        <rect x="53" y="105" width="10" height="4" />
      </g>
    </svg>
  );
};

export default KeyLogo;
