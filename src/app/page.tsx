import Image from 'next/image';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export default function Home() {
  return (
    <>
      <h1>Welcome to My Next.js App</h1>
      <Image src="file.svg" alt="Sample Image" width={600} height={600} />
      <p>This is a sample Next.js application using the App Router.</p>
      <div className="w-full h-[500vh]">엄청난 영역을 먹는 임시 div 요소</div>
      <ThemeToggle />
    </>
  );
}
