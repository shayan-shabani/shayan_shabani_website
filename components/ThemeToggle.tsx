'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center
        shadow-md transition-all duration-300 overflow-visible group
        ${theme === 'light' 
          ? 'bg-blue-800 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]'
          : 'bg-yellow-300 hover:shadow-[0_0_15px_rgba(252,211,77,0.7)]'
        }
      `}
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        // Moon icon with hover effect
        <div className="w-7 h-7 transform transition-transform duration-300 group-hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full transition-all duration-300"
          >
            {/* Moon shape with glowing border effect */}
            <g transform="scale(0.85) translate(2, 2)">
              <path
                d="M21.752 15.002A9.718 9.718 0 0 1 12.002 21a9.742 9.742 0 0 1-8.776-5.595c-.21-.479.154-.91.638-1.029a9.76 9.76 0 0 0 7.967-1.917c2.97-2.392 3.913-5.397 3.506-8.547-.096-.735.499-1.071 1.044-.79A9.725 9.725 0 0 1 21.752 15.002Z"
                fill="#1e3a8a"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 hover:stroke-opacity-100 hover:stroke-width-2"
              />
            </g>
          </svg>
        </div>
      ) : (
        // Sun icon with hover effect and rays outside circle
        <div className="w-8 h-8 transform transition-transform duration-300 group-hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full transition-all duration-300"
          >
            {/* Sun circle */}
            <circle 
              cx="12" 
              cy="12" 
              r="5" 
              fill="#fcd34d"
              stroke="#fbbf24"
              strokeWidth="1"
              className="transition-all duration-300 hover:stroke-width-2" 
            />
            
            {/* Sun rays - positioned outside the circle */}
            <line x1="12" y1="3" x2="12" y2="7" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="12" y1="17" x2="12" y2="21" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="3" y1="12" x2="7" y2="12" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="17" y1="12" x2="21" y2="12" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Diagonal rays */}
            <line x1="5.636" y1="5.636" x2="8.464" y2="8.464" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="15.536" y1="15.536" x2="18.364" y2="18.364" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="5.636" y1="18.364" x2="8.464" y2="15.536" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="15.536" y1="8.464" x2="18.364" y2="5.636" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      )}
    </button>
  );
}