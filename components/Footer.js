export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-6 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Lockyz Media. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://discord.gg/NgpN3YYbMM" target="_blank" rel="noreferrer" className="btn-link">Discord</a>
          <a href="https://github.com/Lockyz-Media-Archive-Project" target="_blank" rel="noreferrer" className="btn-link">GitHub</a>
          <a href="mailto:lockyzmedia@gmail.com" className="btn-link">Email</a>
        </div>
      </div>
    </footer>
  );
}
