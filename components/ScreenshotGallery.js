import { useState } from 'react'

export default function ScreenshotGallery({ images = [] }){
  const [active, setActive] = useState(null)

  return (
    <>
      <div className="screenshots">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`screenshot ${i+1}`} onClick={() => setActive(i)} />
        ))}
      </div>

      <div className={`lightbox ${active !== null ? 'show' : ''}`} onClick={() => setActive(null)}>
        {active !== null && <img src={images[active]} alt={`screenshot ${active+1}`} />}
      </div>
    </>
  )
}
