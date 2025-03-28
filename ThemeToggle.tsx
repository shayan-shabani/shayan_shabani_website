// ThemeToggle.tsx
'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 w-12 h-12 rounded-full p-2 shadow-md transition-all 
        ${theme === 'light' ? 'bg-yellow-300 shadow-glow' : 'bg-blue-800 shadow-darkGlow'}
      `}
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        // Sun icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-7.364l-2.121 2.121M8.757 15.243l-2.121 2.121m12.728 0l-2.121-2.121M8.757 8.757L6.636 6.636"
          />
        </svg>
      ) : (
        // Fixed moon icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0 1 12.002 21a9.742 9.742 0 0 1-8.776-5.595c-.21-.479.154-.91.638-1.029a9.76 9.76 0 0 0 7.967-1.917c2.97-2.392 3.913-5.397 3.506-8.547-.096-.735.499-1.071 1.044-.79A9.725 9.725 0 0 1 21.752 15.002Z"
          />
        </svg>
      )}
    </button>
  );
}