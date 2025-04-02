import { CSSProperties, ReactNode } from 'react';
import { useTheme } from 'components/ThemeProvider';

type GradientBorderCardProps = {
  children: ReactNode;
  className?: string;
  isLink?: boolean;
  heightFull?: boolean;
};

export default function GradientBorderCard({ 
  children, 
  className = 'p-4 sm:p-6', 
  isLink = false,
  heightFull = true
}: GradientBorderCardProps) {
  const { theme } = useTheme();

  // Define theme-specific colors
  const themeColors = {
    light: {
      bg: '255 255 255',
      text: '15 23 42',
      gold: '234 179 8',
      purple: '168 85 247'
    },
    dark: {
      bg: '2 6 23',
      text: '255 255 255',
      gold: '250 204 21',
      purple: '192 132 252'
    },
  };

  const colors = themeColors[theme] || themeColors.dark;

  return (
    <div
      style={{
        '--bg': colors.bg,
        '--text': colors.text,
        '--gold': colors.gold,
        '--purple': colors.purple,
        '--bg-color': `rgb(var(--bg))`,
        '--border-color': `linear-gradient(var(--angle),
          rgb(var(--gold)) 0%,
          rgb(var(--gold) / 0.7) 33.33%,
          rgb(var(--purple) / 0.6) 66.67%,
          rgb(var(--purple) / 0.8) 100%)
        `,
      } as CSSProperties}
      className={`w-full ${heightFull ? 'h-full' : ''} bg-white dark:bg-slate-900 flex flex-col ${className} 
        [--angle:145deg] border border-transparent
        [background-origin:border-box] 
        [background-clip:padding-box,border-box]
        [background-image:var(--bg-color),var(--border-color)]
        transition-colors duration-300 shadow-md`}
    >
      {children}
    </div>
  );
}