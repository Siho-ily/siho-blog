import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        <h1>Welcome to My Next.js App</h1>
        <Image src="file.svg" alt="Sample Image" width={600} height={400} />
        <p>This is a sample Next.js application using the App Router.</p>
      </main>
    </>
  );
}
