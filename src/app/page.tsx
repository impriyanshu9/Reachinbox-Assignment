import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Link href="/signup">
        <div className="px-6 py-4 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600">
          View Assignment
        </div>
      </Link>
    </div>
  );
}
