import Alert from '../../components/Alert';

export default function SCPC() {
  return (
    <div>
      <h1>SCPC</h1>
      <p className="text-muted">Defeat the Galactic Conquers in this epic spaceship battling game.</p>

      <Alert type="error">
        This Unity build was updated automatically to mitigate a Unity Engine security vulnerability; this increases the risk of bugs.
      </Alert>

      <section>
        <h2>About</h2>
        <p>SCPC is a fast-paced space combat prototype featuring early AI enemies and weapon systems. This archive contains the final indev build.</p>
      </section>
    </div>
  );
}
