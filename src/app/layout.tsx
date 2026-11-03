import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AVEREN TECHNOLOGIES | Building Digital Products. Empowering Ideas.',
  description:
    'Averen Technologies is a digital product and technology studio providing web development, application development, MVP prototyping, custom software solutions, and UI/UX creative design.',
  icons: {
    icon: [
      { url: '/Averen%20Technologies.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/Averen%20Technologies.png',
    apple: [
      { url: '/Averen%20Technologies.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased text-brand-text bg-brand-bg selection:bg-brand-teal selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
