import Link from 'next/link';
export default function TestLayout({ children }: { children: React.ReactNode }) {
  const linkList = [
    { href: '/', label: '홈', className: 'text-gray-500' },
    { href: '/test', label: '테스트 홈', className: 'text-theme-primary' },
    { href: '/test/theme', label: '테마', className: 'text-theme-primary' }
  ];
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
