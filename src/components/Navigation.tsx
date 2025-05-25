import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import React, { useState, useRef, useEffect } from 'react';
import logoDark from '../assets/logo-d.png'
import logoLight from '../assets/logo.png'
import { ThemeToggleButton } from './ui/ThemeToggleButton';
import { useTheme } from './ui/ThemeProvider';

export default function Navigation() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Close popover when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        (popoverRef.current && !popoverRef.current.contains(e.target as Node)) &&
        (hamburgerRef.current && !hamburgerRef.current.contains(e.target as Node))
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  // Handle mounting/unmounting for animation
  useEffect(() => {
    if (menuOpen) {
      setShowMenu(true);
    } else if (showMenu) {
      const timeout = setTimeout(() => setShowMenu(false), 300); // match animation duration
      return () => clearTimeout(timeout);
    }
  }, [menuOpen, showMenu]);

  // Nav buttons (reuse for both layouts)
  const navButtons = (
    <>
      <Tooltip title={<span className='text-xs sm:text-sm md:text-base'>About</span>} placement="right">
        <button
          onClick={() => { navigate('/'); setMenuOpen(false); }}
          className="bg-background text-foreground rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-transform duration-200 w-12 h-12 sm:w-12 sm:h-12 border border-border"
          aria-label="About"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12 sm:w-15 sm:h-15 fill-current text-[#1a2236] dark:text-white">
            <path d="M256 73.825c-100.613 0-182.18 81.562-182.18 182.17a182.18 182.18 0 0 0 364.36 0c0-100.608-81.572-182.17-182.18-182.17zm.553 268.12h-78.93c0-56.91 49.98-56.901 61.07-71.773l1.27-6.793c-15.582-7.893-26.582-26.939-26.582-49.201 0-29.33 19.081-53.122 42.619-53.122 23.532 0 42.61 23.793 42.61 53.122 0 22.078-10.802 41-26.175 49.017l1.442 7.716c12.172 14.16 60.486 15.082 60.486 71.034z" />
          </svg>
        </button>
      </Tooltip>
      <Tooltip title={<span className='text-xs sm:text-sm md:text-base'>Projects</span>} placement="right"> 
        <button
          onClick={() => { navigate('/projects'); setMenuOpen(false); }}
          className="bg-background text-foreground rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-transform duration-200 w-12 h-12 sm:w-12 sm:h-12 border border-border"
          aria-label="Projects"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12 sm:w-15 sm:h-15 fill-current text-[#1a2236] dark:text-white">
            <path d="M256 73.825a182.177 182.177 0 0 0-182.179 182.18c0 100.6 81.563 182.17 182.179 182.17 100.61 0 182.18-81.57 182.18-182.17A182.182 182.182 0 0 0 256 73.825zm-50.703 258.39a4.725 4.725 0 0 1-6.619 4.332l-65.558-28.581a4.721 4.721 0 0 1-2.839-4.324V179.776a4.725 4.725 0 0 1 6.618-4.332l65.549 28.58a4.724 4.724 0 0 1 2.84 4.334v123.856zm89.146-28.573a4.727 4.727 0 0 1-2.83 4.324l-65.566 28.581a4.716 4.716 0 0 1-6.61-4.332V208.359a4.717 4.717 0 0 1 2.83-4.333l65.558-28.581a4.725 4.725 0 0 1 6.618 4.332zm89.166 28.573a4.725 4.725 0 0 1-6.618 4.332l-65.568-28.581a4.713 4.713 0 0 1-2.83-4.324V179.776a4.725 4.725 0 0 1 6.618-4.332l65.549 28.58a4.724 4.724 0 0 1 2.84 4.334v123.856z" />
          </svg>
        </button>
      </Tooltip>
      <Tooltip title={<span className='text-xs sm:text-sm md:text-base'>Contact</span>} placement="right">
        <button
          onClick={() => { navigate('/contact'); setMenuOpen(false); }}
          className="bg-background text-foreground rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-transform duration-200 w-12 h-12 sm:w-12 sm:h-12 border border-border"
          aria-label="Contact"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 h-10 sm:w-13 sm:h-13 fill-current text-[#1a2236] dark:text-white">
            <path d="M256 73.825a182.18 182.18 0 0 0-182.18 182.18c0 100.617 81.567 182.17 182.18 182.17a182.175 182.175 0 1 0 0-364.35zm-93.061 115.972h186.127l.008.03L256 247.865l-93.07-58.04zm202.195 122.598a19.522 19.522 0 0 1-19.52 19.52H166.378a19.525 19.525 0 0 1-19.52-19.52V209.317a19.926 19.926 0 0 1 .308-3.34l102.998 64.23c.132.08.264.132.396.211.132.07.272.14.413.211a10.967 10.967 0 0 0 2.242.87c.079.018.157.044.236.061a11.318 11.318 0 0 0 2.541.317h.017a11.35 11.35 0 0 0 2.544-.317c.075-.017.154-.043.234-.06a11.582 11.582 0 0 0 2.25-.87c.132-.07.272-.14.408-.212.128-.079.268-.132.392-.211l102.99-64.23a19.025 19.025 0 0 1 .307 3.34v103.078z" />
          </svg>
        </button>
      </Tooltip>
      <Tooltip title={<span className='text-xs sm:text-sm md:text-base'>Resume</span>} placement='right'>
        <a href="https://google.com" target='_blank' rel="noreferrer noopener" aria-label="Resume">
          <button className="bg-background text-foreground rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-transform duration-200 w-12 h-12 sm:w-12 sm:h-12 border border-border">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12 sm:w-15 sm:h-15 fill-current text-[#1a2236] dark:text-white">
              <g data-name="Documents">
                <path d="M180.396 292.993h113.405v12.604H180.396zM180.396 265.044h113.405v12.604H180.396zM180.396 237.095h113.405v12.604H180.396zM180.396 322.551h113.405v12.604H180.396z" />
                <path d="M256 73.82A182.179 182.179 0 0 0 73.82 256.01c0 100.608 81.563 182.17 182.18 182.17s182.18-81.562 182.18-182.17A182.179 182.179 0 0 0 256 73.82zm62.72 138.446v160.788a2.459 2.459 0 0 1-2.46 2.46H157.94a2.459 2.459 0 0 1-2.46-2.46v-202.6a2.459 2.459 0 0 1 2.46-2.459H316.26a2.458 2.458 0 0 1 2.458 2.458zm28.352-28.354v141.109a22.138 22.138 0 0 1-15.75 21.2V190.126a34.774 34.774 0 0 0-34.726-34.735H184.773a22.138 22.138 0 0 1 21.19-15.75H324.95a22.13 22.13 0 0 1 22.122 22.131v22.14z" />
                <path d="M180.396 209.145h113.405v12.595H180.396z" />
              </g>
            </svg>
          </button>
        </a>
      </Tooltip>
      <Tooltip title={<span className='text-xs sm:text-sm md:text-base'>Resume</span>} placement='right'>
        <a href="https://github.com/Sharvafork" target='_blank' rel="noreferrer noopener" aria-label="Github">
        <button className="bg-background text-foreground rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-transform duration-200 w-12 h-12 sm:w-12 sm:h-12 border border-border">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 16 16"
  className="w-8 h-8 sm:w-8 sm:h-8 fill-current text-[#1a2236] dark:text-white"
  aria-hidden="true"
>
  <path
    fillRule="evenodd"
    d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.65 7.65 0 0 1 2-.27 7.65 7.65 0 0 1 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
    clipRule="evenodd"
  />
</svg>

</button>

        </a>
      </Tooltip>
    </>
  );

  return (
    <>
      {/* Desktop/Tablet Sidebar */}
      <div className="hidden sm:flex flex-col items-center gap-4 fixed left-2 sm:left-4 md:left-6 top-6 sm:top-8 md:top-10 z-40">
        {/* Animated theme toggle button at the top of nav (desktop/tablet only) */}
        <div className="mb-2">
          <ThemeToggleButton />
        </div>
        {navButtons}           
      </div>
      {/* Mobile Hamburger */}
      <div className="sm:hidden fixed top-0 left-0 w-full z-50 bg-background/80 flex flex-col items-center">
        <div className={`w-full flex flex-row items-center justify-between px-4 transition-all duration-300 ${menuOpen ? 'h-30' : 'h-22'}`}> 
          <div className="flex flex-row items-center">
            <button
              ref={hamburgerRef}
              className="w-10 h-10 flex flex-col justify-center items-center bg-background rounded-md"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Open navigation"
            >
              <span
                className={`block w-6 h-0.5 bg-foreground mb-1 transition-all duration-300 ease-in-out
                  ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-foreground mb-1 transition-all duration-300 ease-in-out
                  ${menuOpen ? 'opacity-0 scale-0' : ''}`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ease-in-out
                  ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              ></span>
            </button>
            <img src={theme === 'dark' ? logoDark : logoLight} alt="Shortcut Sharva Logo" className="ml-2 my-0 select-none w-35" />
          </div>
          {/* Animated theme toggle button at the right in mobile navbar */}
          <div className="sm:hidden">
            <ThemeToggleButton />
          </div>
        </div>
        {/* Pop-up horizontal menu at the top */}
        {showMenu && (
          <div className="fixed inset-0 z-50 flex items-start justify-center sm:hidden">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/60 transition-opacity duration-300" />
            {/* Popup menu */}
            <div
              ref={popoverRef}
              className={`relative mt-20 w-[95vw] max-w-md bg-background border border-border rounded-xl shadow-2xl flex flex-row justify-center items-center gap-4 py-4 px-4
                transition-all duration-300 ease-in-out
                ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
            >
              {navButtons}
            </div>
          </div>
        )}
      </div>
      {/* Spacer for fixed hamburger (mobile only) */}
      <div className="sm:hidden h-16"></div>
    </>
  );
} 