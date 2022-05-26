import React from 'react';

export default function Light({ id, children }: { id: string | undefined, children: React.ReactNode }) {
  return (
    <div
      id={id}
      style={{
        color: '#45493DFF',
        backgroundColor: '#e1efe6',
      }}
      className="container-fluid p-0 text-center"
    >
      {children}
      <hr
        className="m-0 p-0"
        style={{
          border: '1px solid #222318',
        }}
      />
    </div>
  );
}
