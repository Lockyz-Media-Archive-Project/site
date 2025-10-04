export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Lockyz Media. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://discord.gg/NgpN3YYbMM" target="_blank" rel="noreferrer" className="btn-link">Discord</a>
          <a href="https://github.com/Lockyz-Media-Archive-Project" target="_blank" rel="noreferrer" className="btn-link">GitHub</a>
          <a href="mailto:lockyzmedia@gmail.com" className="btn-link">Email</a>
        </div>
      </div>
    </footer>
  );
}
