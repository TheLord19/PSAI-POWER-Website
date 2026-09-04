import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-9xl font-black text-slate-100 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
      <p className="text-slate-600 mb-8 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
      >
        Return Home
      </Link>
    </div>
  );
}
