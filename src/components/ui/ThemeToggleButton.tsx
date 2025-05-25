import React from 'react';
import { useTheme } from './ThemeProvider';

/**
 * Animated theme toggle button for light/dark mode.
 * Shows a sun icon in light mode and a moon icon in dark mode, with animation.
 */
export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-full bg-background border border-border shadow transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      {/* Sun Icon */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isDark ? 'opacity-0 scale-75 rotate-45' : 'opacity-100 scale-100 rotate-0'}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6 text-yellow-400"
        >
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
      </span>
      {/* Moon Icon */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isDark ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-45'}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6 text-blue-400 dark:text-blue-200"
        >
          <path
            d="M21 12.79A9 9 0 0 1 12.21 3c-.5 0-.63.65-.2.87A7 7 0 1 0 20.13 13c.23.43-.37.66-.87.21z"
            fill="currentColor"
          />
        </svg>
      </span>
    </button>
  );
} 