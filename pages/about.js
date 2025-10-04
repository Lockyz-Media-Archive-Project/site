import React from 'react';

export default function About(){
  return (
    <main className="container">
      <h1>About Lockyz Media Archive</h1>
      <section id="overview" className="card">
        <h2>What is the Lockyz Media Archive?</h2>
        <p>The Lockyz Media Archive preserves abandoned and experimental projects to keep their history accessible.</p>
      </section>

      <section id="goals" className="card">
        <h2>Project Goals</h2>
        <ul>
          <li>Preserve and showcase early experimental projects.</li>
          <li>Provide technical info for archival purposes.</li>
          <li>Offer playable versions and downloadable builds where possible.</li>
        </ul>
      </section>

      <section id="team" className="card">
        <h2>Who's Working on the Project?</h2>
        <p>Lockyz Media core contributors and community volunteers. Add team member details here.</p>
      </section>

      <section id="contact" className="card">
        <h2>Contact</h2>
        <p>For inquiries, reach out via <a href="mailto:lockyzmedia@gmail.com">lockyzmedia@gmail.com</a>.</p>
      </section>
    </main>
  )
}
