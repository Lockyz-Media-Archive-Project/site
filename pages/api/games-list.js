export const runtime = 'edge';

export default async function handler(req) {
  const res = await fetch('/data/games.json');
  const games = await res.json();
  return new Response(JSON.stringify(games), {
    headers: { 'Content-Type': 'application/json' },
  });
}
