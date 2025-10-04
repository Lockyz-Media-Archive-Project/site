import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>404 — Page Not Found</h1>
      <p>Sorry I couldn’t find what you’re looking for, but have a cool duck instead 🦆</p>
      <div className="duck-wrap">
        <img src="https://media.tenor.com/i3Qc4TdcXwMAAAAj/duck-meme.gif" alt="Funny duck" />
      </div>
      <p><Link href="/"><a className="btn-primary">Go Back Home</a></Link></p>
    </div>
  );
}
