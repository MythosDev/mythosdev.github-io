// components/ProfileNode.jsx
import { useState } from 'react';

export function ProfileNode({ data }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{ position: 'relative', padding: 10, border: '1px solid #888', borderRadius: 5, background: 'white' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <strong>{data.name}</strong>

      {hover && (
        <div
          style={{
            position: 'absolute',
            top: '-100%',
            left: '50%',
            transform: 'translateX(0%) translateY(25%)', 
            // translateY(25%)',
            // transform: 'translateY(25%)',
            padding: '10px',
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
            zIndex: 1000,
            width: '200px',
            whiteSpace: 'normal'
          }}
        >
            {/* IMAGE */}
            <div style={{ fontWeight: 'bold', marginBottom: '5px', borderRadius: '20%' }}>
                <img src={data.img} alt="Profile Picture" />
            </div>
            <div style={{ fontWeight: 'bold', marginBottom: '0px' }}>{data.name}</div>
            <div style={{ fontSize: '12px', marginBottom: '5px' }}>{data.region}</div>
            <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '5px' }}>Ethnicity: {data.ethnicity}</div>
            <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '5px' }}>Religion: {data.religion}</div>
            <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '5px' }}>Ideology: {data.ideology}</div>
            {/* problems, description, alternative names, links, handles, organizations */}
            <a href={data.profileLink} target="_blank" rel="noopener noreferrer" style={{ color: '#0077cc', textDecoration: 'underline' }}>
            View Profile
            </a>
        </div>
      )}
    </div>
  );
}
