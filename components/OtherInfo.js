import React from 'react';
import Dropdown from './Dropdown';

export default function OtherInfo({ otherInfo = {} }){
  if (!otherInfo) return null;
  return (
    <div className="other-info card">
      <h3>Other Information</h3>
      {otherInfo.description && <p>{otherInfo.description}</p>}
      {otherInfo.details && otherInfo.details.length>0 && (
        <Dropdown title="Development & Details">
          <ul>
            {otherInfo.details.map((d,i) => <li key={i}><strong>{d.label}:</strong> {d.value}</li>)}
          </ul>
        </Dropdown>
      )}
    </div>
  )
}
