import { Asset } from 'contentful';
import React from 'react';

export default function TeamMate({ item }: { item: Asset }): React.ReactElement {
  return (
    <div className="col">
      <img
        style={{
          maxWidth: '200px',
          maxHeight: '200px',

          height: 'auto',
          width: '100%',
        }}
        src={item.fields.file.url}
      />
      <p>{item.fields.title}</p>
    </div>
  );
}
