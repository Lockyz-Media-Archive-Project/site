import Alert from '../../components/Alert';

export default function TableBall() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Table Ball Unity</h1>
      <p className="mb-4">The last Unity build for our game Unreal Table Ball.</p>
      <Alert type="error">
        This game was updated with an automated tool to protect against a security
        vulnerability affecting the Unity Engine. This means that there is an
        increased risk of bugs.
      </Alert>
    </div>
  );
}
