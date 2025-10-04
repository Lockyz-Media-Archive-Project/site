import '../styles/global.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

function MyApp({ Component, pageProps }){
  // simple announcement state handling: pageProps.announcement can be passed from pages if needed
  const [showAnn, setShowAnn] = useState(true);
  return (
    <>
      <Navbar />
      <Component {...pageProps} announcementVisible={showAnn} onCloseAnnouncement={() => setShowAnn(false)} />
      <Footer />
    </>
  )
}

export default MyApp;
