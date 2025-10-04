import Alert from '../../components/Alert';

export default function TemplateGame() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Template Game</h1>
      <p className="mb-4">This is a template page for new games.</p>
      <Alert type="error">
        This game was updated with an automated tool to protect against a security
        vulnerability affecting the Unity Engine. This means that there is an
        increased risk of bugs.
      </Alert>
    </div>
  );
}
