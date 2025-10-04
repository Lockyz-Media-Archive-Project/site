import Alert from '../../components/Alert';

export default function MonstyCorp() {
  return (
    <div>
      <h1>Monsty Corp</h1>
      <p className="text-muted">Explore the facility known as "Monsty Corp" in this story-based puzzle game.</p>

      <Alert type="error">
        This Unity build was updated automatically to mitigate a Unity Engine security vulnerability; this increases the risk of bugs.
      </Alert>

      <section>
        <h2>About</h2>
        <p>Monsty Corp is an experimental narrative-driven puzzle prototype. This archived build represents the last known Unity build before development ceased.</p>
      </section>
    </div>
  );
}
