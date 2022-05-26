import React from 'react';

export default ({ children }: { children: React.ReactNode }) => (
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
