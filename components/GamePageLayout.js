import React from 'react';
import Announcement from './Announcement';
import SystemRequirements from './SystemRequirements';
import FunFacts from './FunFacts';
import OtherInfo from './OtherInfo';
import ExternalLinks from './ExternalLinks';

export default function GamePageLayout({ game, showAnnouncement }){
  return (
    <div>
      {/* Announcement placement handled inside Announcement component via routePath matching */}
      <article className="game-page">
        <header>
          <h1>{game.title}</h1>
          <p className="meta">{game.description}</p>
        </header>

        <section className="card">
          <p>{game.description}</p>
        </section>

        <SystemRequirements minimum={game.requirements?.minimum} recommended={game.requirements?.recommended} />

        <FunFacts items={game.funFacts} />

        <div className="card">
          <h3>About this project</h3>
          <p>{game.otherInfo?.description}</p>
          <Dropdown title="Development & Details">
            <ul>
              {game.otherInfo?.details?.map((d, i) => <li key={i}><strong>{d.label}:</strong> {d.value}</li>)}
            </ul>
          </Dropdown>
        </div>

        <ExternalLinks links={game.externalLinks} />

      </article>
    </div>
  )
}
