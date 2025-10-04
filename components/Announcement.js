import React from 'react';

export default function Announcement({type='info', icon='ℹ️', text='', onClose}){
  return (
    <div className={`announcement ${type}`} role="status">
      <div className="icon">{icon}</div>
      <div className="text" dangerouslySetInnerHTML={{__html: text}} />
      <button className="close" aria-label="Close announcement" onClick={onClose}>✕</button>
    </div>
  )
}
