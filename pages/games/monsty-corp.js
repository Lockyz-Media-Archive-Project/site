import Alert from '../../components/Alert';

export default function MonstyCorp() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Monsty Corp Unity</h1>
      <p className="mb-4">Explore the facility known as "Monsty Corp" in this story-based puzzle game.</p>
      <Alert type="error">
        This game was updated with an automated tool to protect against a security
        vulnerability affecting the Unity Engine. This means that there is an
        increased risk of bugs.
      </Alert>
    </div>
  );
}
