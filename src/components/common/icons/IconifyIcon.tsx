import { CSSProperties } from 'react';

interface IconifyIconProps {
  icon: {
    body: string;
    width?: number;
    height?: number;
  };
  className?: string;
  style?: CSSProperties;
  width?: number | string;
  height?: number | string;
}

export default function IconifyIcon({
  icon,
  className = '',
  style,
  width,
  height
}: IconifyIconProps) {
  const iconWidth = width || icon.width || 24;
  const iconHeight = height || icon.height || 24;
  const viewBox = `0 0 ${icon.width || 24} ${icon.height || 24}`;

  return (
    <svg
      className={className}
      style={style}
      width={iconWidth}
      height={iconHeight}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: icon.body }}
    />
  );
}
