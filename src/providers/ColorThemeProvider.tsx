'use client';

import { createContext, useEffect, useState, ReactNode } from 'react';

export type ColorTheme = 'default' | 'coral' | 'ocean' | 'forest';

export interface ColorThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

export const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined);

export function ColorThemeProvider({ children }: { children: ReactNode }) {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>('coral');
  const [mounted, setMounted] = useState(false);

  // 마운트 후 localStorage에서 테마 로드
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('colorTheme') as ColorTheme | null;
    if (saved && ['default', 'coral', 'ocean', 'forest'].includes(saved)) {
      setColorThemeState(saved);
    }
  }, []);

  // 컬러 테마 클래스 적용
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const themes: ColorTheme[] = ['default', 'coral', 'ocean', 'forest'];

    // 모든 컬러 테마 클래스 제거
    themes.forEach(theme => root.classList.remove(theme));

    // 선택된 컬러 테마 클래스 추가
    root.classList.add(colorTheme);
  }, [colorTheme, mounted]);

  const setColorTheme = (theme: ColorTheme) => {
    setColorThemeState(theme);
    localStorage.setItem('colorTheme', theme);
  };

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
}
