import Link from 'next/link';
export default function TestLayout({ children }: { children: React.ReactNode }) {
  const linkData = [
    { href: '/', label: '홈', className: 'text-gray-500' },
    { href: '/test', label: '테스트 홈' },
    { href: '/test/theme', label: '테마' },
    { href: '/test/components', label: '컴포넌트' }
  ];
  const linkList = linkData.map(link => ({
    ...link,
    className: link.className || 'text-theme-primary'
  }));
  return (
    <>
      <div className="p-4 bg-theme-bg-header">
        {linkList.map(link => (
          <Link key={link.href} href={link.href} className={`ml-2 underline ${link.className}`}>
            {link.label}
          </Link>
        ))}
      </div>
      {children}
    </>
  );
}
