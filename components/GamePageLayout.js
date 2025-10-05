import React from 'react';
import SystemRequirements from './SystemRequirements';
import FunFacts from './FunFacts';
import OtherInfo from './OtherInfo';
import ExternalLinks from './ExternalLinks';

export default function GamePageLayout({ game }){
  return (
    <article className="game-page container">
      <header>
        <h1>{game.title}</h1>
        {game.subtitle && <p className="meta">{game.subtitle}</p>}
      </header>
      <section className="card">
        <p>{game.description}</p>
      </section>

      <SystemRequirements minimum={game.requirements?.minimum} recommended={game.requirements?.recommended} />

      <FunFacts items={game.funFacts} />

      <OtherInfo otherInfo={game.otherInfo} />

      <ExternalLinks links={game.externalLinks} />
    </article>
  )
}
