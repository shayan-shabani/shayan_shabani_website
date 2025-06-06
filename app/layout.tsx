import '../styles/globals.css';
import { ThemeProvider } from 'components/ThemeProvider';

export const metadata = {
    title: 'Shayan Shabani',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=JetBrains%20Mono:wght@100..800&display=block"
                    rel="stylesheet"
                />
            </head>
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
