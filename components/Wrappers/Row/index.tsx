import React from 'react';

export default function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="row g-0 m-0">
      {children}
    </div>
  );
}
