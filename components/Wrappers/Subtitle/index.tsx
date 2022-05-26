import React from 'react';

export default function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        color: '#45493DFF',
        fontSize: '2vw',
        lineHeight: '2vw',
        letterSpacing: '0.178em',
        listStyleType: 'none',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </div>
  );
}
