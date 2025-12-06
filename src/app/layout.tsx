import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProviders } from '@/providers/ThemeProviders';
import Navigation from '@/components/layout/Navigation/Navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Siho-ily',
  description: 'Siho의 개인 블로그s'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const colorTheme = localStorage.getItem('colorTheme') || 'coral';
                document.documentElement.classList.add(colorTheme);
              } catch (e) {}
            `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning>
        {/* ThemeProviders - 테마 Providers, 다크/라이트 및 테마 상태 관리 */}
        <ThemeProviders>
          <Navigation />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
