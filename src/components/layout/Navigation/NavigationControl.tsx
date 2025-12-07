'use client';

import { useEffect, useState } from 'react';

interface NavigationControlProps {
  children: (isScrolled: boolean, mounted: boolean) => React.ReactNode;
  threshold?: number;
}

export default function NavigationControl({ children, threshold = 50 }: NavigationControlProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트된 후 애니메이션 활성화
    const timer = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // 초기 스크롤 위치 확인
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return <>{children(isScrolled, mounted)}</>;
}
