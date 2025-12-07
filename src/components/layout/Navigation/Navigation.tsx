'use client';

import { motion } from 'motion/react';
import IconifyIcon from '@/components/common/icons/IconifyIcon';
import NavigationControl from './NavigationControl';
import NavigationData from '@/data/navigationIcon.json';
import { iconMap } from '@/data/iconMap';

type NavigationItem = {
  label: string;
  href: string;
  icon: string;
};

const navigationItems: NavigationItem[] = NavigationData;

export default function Navigation() {
  return (
    <NavigationControl threshold={1}>
      {isScrolled => (
        <div className="w-full h-14">
          {/* Navigation 영역 확보 */}
          <motion.nav
            className="fixed z-50 bg-theme-bg-header"
            initial={{
              top: '0px',
              left: '0px',
              right: '0px',
              backdropFilter: 'blur(0px)',
              boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
              borderRadius: '0px'
            }}
            animate={{
              top: isScrolled ? '8px' : '0px',
              left: isScrolled ? '16px' : '0px',
              right: isScrolled ? '16px' : '0px',
              backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
              boxShadow: isScrolled
                ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                : '0 0 0 0 rgba(0, 0, 0, 0)',
              borderRadius: isScrolled ? '12px' : '0px'
            }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1]
            }}>
            <div className="flex items-center space-x-4 p-4">
              {navigationItems.map(item => {
                const icon = iconMap[item.icon];
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-2 text-theme-primary hover:text-theme-secondary">
                    {icon && <IconifyIcon icon={icon} className="w-6 h-6" />}
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.nav>
        </div>
      )}
    </NavigationControl>
  );
}
