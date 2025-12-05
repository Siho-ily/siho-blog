'use client';

import { createContext, useEffect, useState, ReactNode } from 'react';

export type ColorTheme = 'default' | 'coral' | 'ocean' | 'forest';

export interface ColorThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

export const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined);

export function ColorThemeProvider({ children }: { children: ReactNode }) {
  // 초기값을 로컬 스토리지에서 가져오기 (lazy initialization)
  const [colorTheme, setColorThemeState] = useState<ColorTheme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('colorTheme') as ColorTheme | null;
      if (saved && ['default', 'coral', 'ocean', 'forest'].includes(saved)) {
        return saved;
      }
    }
    return 'coral';
  });

  // 컬러 테마 클래스 적용
  useEffect(() => {
    const root = document.documentElement;
    const themes: ColorTheme[] = ['default', 'coral', 'ocean', 'forest'];

    // 모든 컬러 테마 클래스 제거
    themes.forEach(theme => root.classList.remove(theme));

    // 선택된 컬러 테마 클래스 추가
    root.classList.add(colorTheme);
  }, [colorTheme]);

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
