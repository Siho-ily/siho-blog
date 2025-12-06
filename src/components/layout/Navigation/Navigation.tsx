'use client';

import { Icon } from '@iconify/react';
import { motion } from 'motion/react';
import NavigationControl from './NavigationControl';
import NavigationData from '@/data/navigation.json';

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
            className="fixed top-0 left-0 right-0 z-50 bg-theme-bg-header"
            initial={false}
            animate={{
              width: isScrolled ? 'calc(100% - 32px)' : '100%',
              margin: isScrolled ? '8px 16px' : '0px',
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
              {navigationItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 text-theme-primary hover:text-theme-secondary">
                  <Icon icon={item.icon} className="w-6 h-6" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </motion.nav>
        </div>
      )}
    </NavigationControl>
  );
}
