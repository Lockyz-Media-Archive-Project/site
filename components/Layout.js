import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="site-root">
      <Navbar />
      <main className="site-main container" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
