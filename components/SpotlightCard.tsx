import classNames from 'classnames';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent, ReactNode, useEffect } from 'react';
import { useTheme } from 'ThemeProvider.tsx';

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export default function SpotlightCard({
  children,
  className = ''
}: SpotlightCardProps) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const { theme } = useTheme();
  
  // Create a MotionValue for the color (increased opacity from 0.1 to 0.2)
  const glowColor = useMotionValue('rgba(168, 85, 247, 0.2)');
  
  // Update the glow color when theme changes
  useEffect(() => {
    glowColor.set(theme === 'light' 
      ? 'rgba(168, 85, 247, 0.2)' 
      : 'rgba(255, 68, 80, 0.2)');
  }, [theme, glowColor]);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={classNames('group relative h-full transform transition-transform duration-300 ease-out hover:scale-105 hover:z-10', className)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `
        }}
      />
      {children}
    </div>
  );
}