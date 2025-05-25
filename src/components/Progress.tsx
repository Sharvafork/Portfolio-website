import React, { useEffect, useRef, useState } from 'react';

// AnimatedProgressBars.tsx
interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'CSS', level: 80 },
];

export default function AnimatedProgressBars(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">My Tech Stack</h2>
      {skills.map(({ name, level }) => (
        <div key={name} className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium">{name}</span>
            <span className="text-sm font-medium">{level}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-1500"
              style={{ width: visible ? `${level}%` : '0%' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}