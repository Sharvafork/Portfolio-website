import React, { useEffect } from 'react';
import { useTheme } from "@/components/ui/ThemeProvider";

interface BackgroundAnimationProps {
  containerId: string;
  className?: string;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ containerId, className }) => {
  const { theme } = useTheme();

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    container.appendChild(canvas);

    const setCanvasSize = () => {
      canvas.width = window.outerWidth;
      canvas.height = container.scrollHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz![]@#$%^&*()_+-={}|;:\'\"<,>.?/';
    const fontSize = 16;
    let columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      // Semi-transparent background to create the falling trail effect
      ctx.fillStyle = theme === 'dark' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'; // Adjust opacity for trailing effect based on theme
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Use theme for text color
      const textColor = theme === 'dark' ? 'rgba(0, 255, 0, 0.2)' : 'rgba(0, 170, 0, 0.2)'; // Green for dark, slightly different green for light
      ctx.fillStyle = textColor;
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Sending the drop back to the top randomly after it has crossed the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        // Incrementing Y coordinate
        drops[i] += 0.1; // Reduced the increment for slower speed
      }
    };

    let animationFrameId: number;
    const animate = () => {
        draw();
        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
      if (container && container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, [theme]);

  return <div id={containerId} className={className}></div>;
};

export default BackgroundAnimation;