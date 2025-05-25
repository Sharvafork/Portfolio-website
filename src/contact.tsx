import * as React from "react";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useTheme } from "@/components/ui/ThemeProvider";

function Contact() {
  const [showPattern, setShowPattern] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const timeout = setTimeout(() => setShowPattern(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen w-screen overflow-hidden relative bg-background text-foreground">
      {/* Navigation always on top */}
      <div className="relative z-20">
        <Navigation />
      </div>
      {/* Background Pattern with Fade-in Transition */}
      <div
        className={`absolute inset-0 z-0 transition-all duration-1000 ${showPattern ? 'mask-reveal' : 'mask-hide'}`}
        style={{
          backgroundImage:
            theme === 'dark'
              ? "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'18\\' viewBox=\\'0 0 100 18\\'%3E%3Cpath fill=\\'%23ffffff\\' fill-opacity=\\'0.4\\' d=\\'M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z\\'%3E%3C/path%3E%3C/svg%3E')"
              : "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'18\\' viewBox=\\'0 0 100 18\\'%3E%3Cpath fill=\\'%231a2236\\' fill-opacity=\\'0.12\\' d=\\'M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z\\'%3E%3C/path%3E%3C/svg%3E')",
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          WebkitMaskImage: 'radial-gradient(circle at center, white 0%, white 100%)', // fallback
          maskImage: 'radial-gradient(circle at center, white 0%, white 100%)', // fallback
        }}
        aria-hidden="true"
      />
      {/* Centered Card */}
      <div className="flex items-center justify-center min-h-screen relative z-10 p-10">
        <Card className="w-full max-w-md bg-card/90 shadow-xl border border-border ">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-card-foreground">Contact Me</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="text-center text-muted-foreground">
              If you have any questions or would like to get in touch, feel free to reach out via email or connect with me on social media.
            </div>
            <div className="flex flex-col gap-4">
              <Button
                asChild
                variant="outline"
                className="w-full justify-start gap-3"
              >
                <a href="mailto:shortcutsharva@sharva.me">
                  <Mail className="size-5" />
                  shortcutsharva@sharva.me
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start gap-3"
              >
                <a
                  href="https://www.linkedin.com/in/shortcutsharva/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="size-5" />
                  linkedin.com/in/shortcutsharva
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Contact;