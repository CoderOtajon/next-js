import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-green-100 h-[100vh]">
      <Link href="/users">users</Link>
    </main>
  );
}
