'use client';

import { useEffect, useState } from 'react';

interface NavigationControlProps {
  children: (isScrolled: boolean) => React.ReactNode;
  threshold?: number;
}

export default function NavigationControl({ children, threshold = 50 }: NavigationControlProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // 초기 스크롤 위치 확인
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return <>{children(isScrolled)}</>;
}
