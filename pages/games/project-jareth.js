import Alert from '../../components/Alert';

export default function ProjectJareth() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Project Jareth</h1>
      <p className="mb-4">Project Jareth is an unfinished VR Game.</p>
      <Alert type="error">
        This game was updated with an automated tool to protect against a security
        vulnerability affecting the Unity Engine. This means that there is an
        increased risk of bugs.
      </Alert>
    </div>
  );
}
