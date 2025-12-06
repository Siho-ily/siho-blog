import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProviders } from '@/providers/ThemeProviders';
import Navigation from '@/components/layout/Navigation/Navigation';
import { ThemeProvider } from 'next-themes';

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ThemeProviders - 테마 Providers, 다크/라이트 및 테마 상태 관리 */}
        <ThemeProviders>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navigation />
            {children}
          </ThemeProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
