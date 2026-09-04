'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
      <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-6">
        <AlertCircle className="w-10 h-10" />
      </div>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Something went wrong!</h2>
      <p className="text-slate-600 mb-8 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred on our end.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
        <Link 
          href="/"
          className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
