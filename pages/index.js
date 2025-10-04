import Link from 'next/link';

export default function Home() {
  const games = [
    { title: 'Monsty Corp Unity', desc: 'Explore the facility known as "Monsty Corp" in this story-based puzzle game.', link: '/games/monsty-corp' },
    { title: 'SCPC', desc: 'Defeat the Galactic Conquers in this epic spaceship battling game.', link: '/games/scpc' },
    { title: 'Table Ball Unity', desc: 'The last Unity build for our game Unreal Table Ball.', link: '/games/table-ball' },
    { title: 'Project Jareth', desc: 'Project Jareth is an unfinished VR Game.', link: '/games/project-jareth' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to Lockyz Media Archive</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {games.map((g) => (
          <div key={g.title} className="bg-white shadow rounded-xl p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">{g.title}</h2>
            <p className="flex-1 mb-4 text-gray-600">{g.desc}</p>
            <Link href={g.link} className="btn-primary self-start">Play →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
