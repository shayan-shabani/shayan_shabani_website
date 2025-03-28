import { CSSProperties, useContext } from 'react';
import { useTheme } from 'ThemeProvider.tsx';

export default function GradientBorderCard({ children, className = 'p-8' }) {
    const { theme } = useTheme(); // Get the current theme

    // Define theme-specific colors
    const themeColors = {
        light: {
            slate950: '245 245 245',
            accent: '255 126 234',
            blue: '56 189 248',
        },
        dark: {
            slate950: '2 6 23',
            accent: '232 121 249',
            blue: '29 78 216',
        },
    };

    // Select colors based on the current theme
    const colors = themeColors[theme];

    return (
        <div
            style={
                {
                    '--slate-950': colors.slate950,
                    '--accent': colors.accent,
                    '--blue': colors.blue,
                    '--bg-color': 'linear-gradient(rgb(var(--slate-950)), rgb(var(--slate-950)))',
                    '--border-color': `linear-gradient(var(--angle),
                      rgb(var(--accent) / 0.8) 0%,
                      rgb(var(--accent) / 0.3) 33.33%,
                      rgb(var(--accent) / 0.14) 66.67%,
                      rgb(var(--blue) / 0.5) 100%)
                    `,
                } as CSSProperties
            }
            className={`w-full border ${className} [--angle:145deg]
            [border-image:var(--border-color)_1]`}
        >
            {children}
        </div>
    );
}
