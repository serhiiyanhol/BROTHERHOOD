import React from 'react';

export default ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      color: '#e1efe6',
      backgroundColor: '#353830'
    }}
    className="container-fluid p-0 text-center"
  >
    {children}
    <hr
      className="m-0 p-0"
      style={{
        border: '1px solid #e1efe6',
      }}
    />
  </div>
);
