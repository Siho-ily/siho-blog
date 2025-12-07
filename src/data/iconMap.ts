import home3Line from '@iconify-icons/mingcute/home-3-line';
import fileLine from '@iconify-icons/mingcute/file-line';
import type { IconifyIcon } from '@iconify/types';

/**
 * 아이콘 매핑
 * navigation.json의 icon 필드 값과 실제 아이콘 객체를 매핑합니다.
 *
 * 새 아이콘 추가 방법:
 * 1. 상단에 아이콘 import: import newIcon from '@iconify-icons/mingcute/new-icon';
 * 2. 아래 객체에 추가: 'mingcute:new-icon': newIcon,
 */
export const iconMap: Record<string, IconifyIcon> = {
  'mingcute:home-3-line': home3Line,
  'mingcute:test-tube-line': fileLine, // test-tube-line이 없어서 임시로 file-line 사용
  'mingcute:file-line': fileLine
};
