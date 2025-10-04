import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4">404 — Page Not Found</h1>
      <p className="mb-6 text-gray-600">
        Sorry I couldn’t find what you’re looking for, but have a cool duck instead 🦆
      </p>

      <div className="flex justify-center mb-6">
        <img src="https://media.tenor.com/i3Qc4TdcXwMAAAAj/duck-meme.gif" alt="Funny 404 Duck" className="rounded-lg shadow-lg max-w-md" />
      </div>

      <Link href="/" className="btn-primary">Go Back Home</Link>
    </div>
  );
}
