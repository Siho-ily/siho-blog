'use client';

import { useTheme } from 'next-themes';
import { useState } from 'react';
import { useColorTheme } from '@/hooks/useColorTheme';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { colorTheme, setColorTheme } = useColorTheme();

  // 클라이언트에서만 렌더링 (SSR 깜빡임 방지)
  if (typeof window === 'undefined') {
    return null;
  }

  if (!mounted) {
    // 첫 렌더링 시에만 mounted 체크
    setTimeout(() => setMounted(true), 1);
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-background border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-50">
      <div className="space-y-4">
        {/* 다크/라이트 모드 */}
        <div>
          <p className="text-sm font-semibold mb-2">다크 모드</p>
          <div className="flex gap-2">
            <button
              onClick={() => setTheme('light')}
              className={`px-3 py-1.5 rounded text-sm transition-colors ${
                theme === 'light'
                  ? 'bg-foreground text-background'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}>
              ☀️ 라이트
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`px-3 py-1.5 rounded text-sm transition-colors ${
                theme === 'dark'
                  ? 'bg-foreground text-background'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}>
              🌙 다크
            </button>
            <button
              onClick={() => setTheme('system')}
              className={`px-3 py-1.5 rounded text-sm transition-colors ${
                theme === 'system'
                  ? 'bg-foreground text-background'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}>
              💻 시스템
            </button>
          </div>
        </div>

        {/* 컬러 테마 */}
        <div>
          <p className="text-sm font-semibold mb-2">컬러 테마</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setColorTheme('default')}
              className={`px-3 py-1.5 rounded text-sm transition-colors ${
                colorTheme === 'default'
                  ? 'bg-gray-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}>
              🎨 기본
            </button>
            <button
              onClick={() => setColorTheme('coral')}
              className={`px-3 py-1.5 rounded text-sm transition-colors ${
                colorTheme === 'coral'
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}>
              🌸 코랄
            </button>
            <button
              onClick={() => setColorTheme('ocean')}
              className={`px-3 py-1.5 rounded text-sm transition-colors ${
                colorTheme === 'ocean'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}>
              🌊 오션
            </button>
            <button
              onClick={() => setColorTheme('forest')}
              className={`px-3 py-1.5 rounded text-sm transition-colors ${
                colorTheme === 'forest'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}>
              🌲 포레스트
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
