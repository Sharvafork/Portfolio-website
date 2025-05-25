import React, { useEffect } from 'react';
import { useTheme } from "@/components/ui/ThemeProvider";
import { Button } from './components/ui/button';
import movie from './assets/movie.png';
import logoLight from './assets/logo.png';
import logoDark from './assets/logo-d.png';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
// Theme is now handled globally in Navigation
/**
 * Main App component rendering the home page with a hero/intro section.
 * Uses ShadCN UI Button and JetBrains Mono font for the intro.
 */
import { useNavigate } from 'react-router-dom';
import pythonLogo from './assets/python.svg';
import reactLogo from './assets/react.svg';
import nodejsLogo from './assets/nodejs.svg';
import expressjsLogo from './assets/expressjs.svg';
import flutterLogo from './assets/flutter.svg';
import aiLogo from './assets/ai.svg';
import llamaindexLogo from './assets/llamaindex.svg';
const uiuxLogo = aiLogo;
import './index.css'; // Import the index.css file
import BackgroundAnimation from './components/BackgroundAnimation';

const App: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    const container = document.getElementById('background-container');
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

    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\[]@#$%^&*()_+-={\}|;:\'\"<,>.?/';
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
      const textColor = theme === 'dark' ? '#0F0' : '#0A0'; // Green for dark, slightly different green for light
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
        drops[i] += 0.26; // Reduced the increment for slower speed
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

  return (
    <>
      {/* Background container for falling code effect */}
      <div id="background-container" className="absolute gg top-0 left-0 overflow-hidden pointer-events-none h-screen"></div>
      <div className="relative min-h-screen w-full text-foreground font-sans h-screen">
      <style>
      </style>
        <div className="relative z-10 p-10 sm:pl-28 md:pl-36">
          {/* Title, description, and pattern image side by side */}
          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <img
              src={theme === 'dark' ? logoDark : logoLight}
              alt="Shortcut Sharva Logo"
              className="hidden md:block aspect-square rounded-xl object-cover shadow-lg border border-gray-700 w-full md:w-[35vw] h-auto max-w-xs md:max-w-[320px] md:max-h-[320px] bg-background p-6"
            />
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 typing-animation">Shortcut Sharva</h1>
              <p
                className="max-w-xl mb-6 md:mb-10 text-sm sm:text-base md:text-lg typing-animation"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Hi! I'm <strong>Sharva</strong>, a developer who can efficiently tackle high-level tasks with the power of <strong>AI</strong>. My expertise lies in building scalable, reinforced backend systems involving technologies like <strong>Python</strong>, <strong>MERN Stack</strong>, and <strong>Flutter</strong>. I also possess acceptable skills in designing <strong>User Interfaces</strong> that form a connection between the product and the customer. One of my biggest strengths is <strong>adaptability</strong>—having experienced the bottom of the iceberg, I can finish tasks out of my field of expertise. I have also tested <strong>operating systems</strong> (including <strong>Linux distributions</strong>), providing me with a firm foundation in <strong>computer science</strong>.
              </p>
              {/* Skills Section */}
              <div className="skills-section">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-4">
                  <img src={pythonLogo} alt="Python" width="40" height="40" />
                  <img src={reactLogo} alt="React" width="40" height="40" />
                  <img src={nodejsLogo} alt="Node.js" width="40" height="40" />
                  <img src={expressjsLogo} alt="Express.js" width="40" height="40" />
                  <img src={flutterLogo} alt="Flutter" width="40" height="40" />
                  <img src={llamaindexLogo} alt="LLamaIndex" width="180" height="180" />
                  <img src={aiLogo} alt="AI" width="40" height="40" />
                </div>
              </div>
              <Button variant="default" size="lg" onClick={() => navigate('/projects')}>
                View Projects
              </Button>
            </div>
          </div>
          {/* Projects Section below intro */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Projects</h2>
            <div className="grid md:grid-cols-3 gap-6" style={{top: "10px"}}>
              <Card className="group transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg border border-border">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg md:text-xl">Plot Analysis Tool</CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base">A plot analyser that can uncover plot concepts from a given text.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg overflow-hidden aspect-video mb-4">
                    <img src={movie} alt="movie" className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105" />
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-2">Technologies Used:</p>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-2">Python, Flask, Gemini API</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-muted-foreground text-[10px] sm:text-xs md:text-sm">2024</span>
                  <Button variant="secondary" size="sm" onClick={() => navigate('/projects/movie')}>
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="group transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg border border-border">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg md:text-xl">Movie App</CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base">A modern movie discovery platform with real-time search and reviews.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg overflow-hidden aspect-video mb-4">
                    <img src={movie} alt="movie" className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105" />
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-2">Technologies Used:</p>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-2">React, TMDB API, Styled Components</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-muted-foreground text-[10px] sm:text-xs md:text-sm">2024</span>
                  <Button variant="secondary" size="sm" onClick={() => navigate('/projects/movie')}>
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="group transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg border border-border">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg md:text-xl">Movie App</CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base">A modern movie discovery platform with real-time search and reviews.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg overflow-hidden aspect-video mb-4">
                    <img src={movie} alt="movie" className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105" />
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-2">Technologies Used:</p>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-2">React, TMDB API, Styled Components</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-muted-foreground text-[10px] sm:text-xs md:text-sm">2024</span>
                  <Button variant="secondary" size="sm" onClick={() => navigate('/projects/movie')}>
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
        <BackgroundAnimation containerId="app-background" className="absolute top-0 left-0 w-full h-full z-[-1]"/>
      </div>
    </>
  );
};

export default App;